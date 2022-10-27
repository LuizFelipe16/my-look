import { useToast, useUser } from 'hooks';
import { createContext, useState, useContext } from 'react';
import { APIClientTypes, TLook } from 'types';
import { onMount, onUpdate, SetState } from '_lib/global';
import { looksStock } from 'data';
import { useProducts } from './Products';
import { appVariables } from '_app';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { getUserLocation } from 'utils';
import Router from "next/router";
import { useAppModals } from './ModalsProvider';

type TCart = APIClientTypes.TProduct &  {
  amount: number;
}

type ShoppingCartProviderData = {
  CartProducts: {
    length: number;
    hasProducts: boolean;
    total: number;
    looks: {
      add: (productId: string) => void;
      remove: (productId: string) => void;
      incrementAmount: ({ productId, amount }: { productId: string, amount: number }) => void;
    }
  };
  goToCheckout: () => void;
  cart: Array<TCart>;
  setCart: SetState<Array<TCart>>;
};

const ShoppingCart = createContext({} as ShoppingCartProviderData);

export function ShoppingCartProvider({ children }: any) {
  const { Products } = useProducts();
  const { errorToast, successToast } = useToast();
  const { user, Session } = useUser();
  const { OpenModal } = useAppModals();

  const [cart, setCart] = useState<Array<TCart>>([]);
  const [total, setTotal] = useState(0);

  const cookies = parseCookies(null);

  onMount(() => {
    setCart(getCartCookies());
  });

  onUpdate(() => {
    const newTotal = cart.reduce((acc, product) => {
      return acc + (product.price * product.amount)
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  onUpdate(() => {
    setCookie(undefined, appVariables.cookies.cart, JSON.stringify(cart), {
      maxAge: 60 * 60 * 24,
      path: '/'
    });
  }, [cart]);

  const getCartCookies = () => {
    const previusCart = cookies[appVariables.cookies.cart];

    if (!previusCart) {
      return [];
    }

    const state = JSON.parse(previusCart || '');

    if (!state) {
      return;
    }

    return state
  }

  const addProduct = async (productId: string) => {
    try {
      // const response = await api.get(`/products/${productId}`);
      // const newProduct = response.data;
      const newProduct = Products.looks.data.find(l => l.id === productId);

      if (!newProduct) {
        errorToast('An error occurred while trying to add the product.');
        return;
      }

      const productInCart = cart.find(product => product.id === newProduct.id);

      if (productInCart) {
        const index = cart.findIndex(product => product.id === productId);

        // const stock = await api.get(`/stock/${productId}`);
        // const productStock: Stock = stock.data;
        const productStock = looksStock.find(s => s.productId === productId);

        if (!productStock) {
          errorToast('Stock: an error occurred while trying to add the product.');
          return;
        }

        if (Number(cart[index].amount) >= Number(productStock.amount)) {
          errorToast('Quantity ordered out of stock.');

        } else {
          cart[index].amount = cart[index].amount + 1
          setCart([...cart]);
          successToast(`Product quantity increased to ${cart[index].amount}`)
        }
      } else {
        cart.push({ ...newProduct, amount: 1 });
        setCart([...cart]);
        successToast('Product added to your cart');
      }
    } catch {
      errorToast('An error occurred while trying to add the product.');
    }
  };

  const removeProduct = (productId: string) => {
    try {
      const index = cart.findIndex(product => product.id === productId);

      if (index < 0) {
        errorToast('An error occurred while trying to remove the product.');
      } else {
        cart.splice(index, 1);
        setCart([...cart]);
        successToast('Product removed from your cart.');
      }
    } catch {
      errorToast('An error occurred while trying to remove the product.');
    }
  };

  const updateProductAmount = async ({ productId, amount }: { productId: string, amount: number }) => {
    try {
      const index = cart.findIndex(product => product.id === productId);

      if (cart[index].amount <= 0) {
        return;
      }

      if (amount <= 0) {
        return;
      }

      // const stock = await api.get(`/stock/${productId}`);
      // const productStock: Stock = stock.data;
      const productStock = cart[index].stock

      if (!productStock) {
        errorToast('Stock: product quantity change error.');
        return;
      }

      if (productStock < amount) {
        errorToast('Quantity ordered out of stock.');
        return;
      }

      if (cart[index].amount > productStock) {
        errorToast('Quantity ordered out of stock.');
      } else {
        cart[index].amount = amount;
        setCart([...cart]);
        successToast(`Product quantity changed to ${cart[index].amount}`);
      }
    } catch {
      errorToast('Product quantity change error.');
    }
  };

  const goToCheckout = () => {
    const can = Session?.isActivated();

    if (!can) {
      OpenModal.warnAccount();
      return;
    }

    const hasLocation = getUserLocation(user).isFillLocation;

    if (!hasLocation) {
      Router.push('/account/location');
      return;
    } else {
      OpenModal.verifyLocationData();
    }

    destroyCookie(undefined, appVariables.cookies.cart);
    setCart([]);
  }

  const dataProvider: ShoppingCartProviderData = {
    CartProducts: {
      length: cart.length,
      hasProducts: cart.length > 0 ? true : false,
      total: total,
      looks: {
        add: addProduct,
        remove: removeProduct,
        incrementAmount: updateProductAmount,
      }
    },
    goToCheckout,
    cart,
    setCart
  }

  return (
    <ShoppingCart.Provider value={dataProvider}>
      {children}
    </ShoppingCart.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCart);
