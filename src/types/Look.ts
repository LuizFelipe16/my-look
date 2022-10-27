
export type TLookType = 'fast' | 'minimal' | 'social' | 'none';

export type TLook = {
  id: string;
  banner: string;
  name: string;
  description: string;
  price: number;
  type: TLookType;
  stock: number;
};

export type TStockItem = {
  id: string | number;
  productId: TLook['id'];
  amount: number;
}

export type TStockLoooks = Array<TStockItem>;
