import { createContext, useState, useContext } from 'react';
import { TLook, TLookType } from 'types';
import { onMount, SetState } from '_lib/global';
import { useToast } from 'hooks';
import { APIClient } from 'services';

type ProductsProviderData = {
  Products: {
    looks: {
      data: Array<TLook>;
      length: number;
      loading: boolean;
      setLoading: SetState<boolean>;
      selectedFilter: TLookType;
      setSelectedFilter: SetState<TLookType>;
    };
    setLooks: SetState<Array<TLook>>;
    refetch: () => void;
  }
};

const Products = createContext({} as ProductsProviderData);

export function ProductsProvider({ children }: any) {
  const [looks, setLooks] = useState<Array<TLook>>([]);
  const [loadingLooks, setLoadingLooks] = useState(false);
  const [selectedFilterForLooks, setSelectedFilterForLooks] = useState<TLookType>('none');

  const { errorToast, standartErrorMessage } = useToast();

  const listProducts = async () => {
    setLoadingLooks(true);

    await APIClient.Admin.Products.getAll().then(({ data }) => {
      if (data.error) {
        errorToast(data.error);
      }

      if (data.message) {
        setLooks(data?.products);
      }
    }).catch(() => errorToast(standartErrorMessage));

    setLoadingLooks(false);
  }

  onMount(() => {
    listProducts();
  });

  const dataProvider: ProductsProviderData = {
    Products: {
      looks: {
        data: looks,
        length: looks.length,
        loading: loadingLooks,
        setLoading: setLoadingLooks,
        selectedFilter: selectedFilterForLooks,
        setSelectedFilter: setSelectedFilterForLooks,
      },
      setLooks,
      refetch: listProducts,
    }
  };

  return (
    <Products.Provider value={dataProvider}>
      {children}
    </Products.Provider>
  )
}

export const useProducts = () => useContext(Products);
