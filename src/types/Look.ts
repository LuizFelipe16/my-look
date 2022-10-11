
export type TLookType = 'fast' | 'minimal' | 'social' | 'none';

export type TLook = {
  id: number;
  banner: string;
  name: string;
  description: string;
  price: number;
  type: TLookType;
  amount: number;
  value: number;
};

export type TStockItem = {
  id: number;
  productId: number;
  amount: number;
}

export type TStockLoooks = Array<TStockItem>;
