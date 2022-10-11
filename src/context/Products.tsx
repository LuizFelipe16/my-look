import { createContext, useState, useContext } from 'react';
import { looks as data } from 'data';
import { TLook, TLookType } from 'types';
import { onMount, SetState } from '_lib/global';

type ProductsProviderData = {
  Products: {
    looks: {
      data: Array<TLook>;
      loading: boolean;
      setLoading: SetState<boolean>;
      selectedFilter: TLookType;
      setSelectedFilter: SetState<TLookType>;
    };
    setLooks: SetState<Array<TLook>>;
  }
};

const Products = createContext({} as ProductsProviderData);

export function ProductsProvider({ children }: any) {
  const [looks, setLooks] = useState<Array<TLook>>(() => data || []);
  const [loadingLooks, setLoadingLooks] = useState(true);
  const [selectedFilterForLooks, setSelectedFilterForLooks] = useState<TLookType>('none');

  onMount(() => {
    setTimeout(() => { setLoadingLooks(false) }, 3000);
  });
  
  const dataProvider: ProductsProviderData = {
    Products: {
      looks: {
        data: looks,
        loading: loadingLooks,
        setLoading: setLoadingLooks,
        selectedFilter: selectedFilterForLooks,
        setSelectedFilter: setSelectedFilterForLooks,
      },
      setLooks
    }
  };

  return (
    <Products.Provider value={dataProvider}>
      {children}
    </Products.Provider>
  )
}

export const useProducts = () => useContext(Products);
