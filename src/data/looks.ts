import { TLook, TLookType, TStockLoooks } from "types";

export const filters: TLookType[]  = ['none', 'social', 'fast', 'minimal'];

const looks: TLook[] = [
  { 
    id: 1, 
    banner: 'look1.jpeg', 
    name: 'Social Look', 
    description: 'Blouse for you to walk and impress everyone', 
    type: 'social',
    amount: 0,
    value: 138.96,
    price: 138.96,
  },
  { 
    id: 2, 
    banner: 'look2.jpg', 
    name: 'Fast Look', 
    description: 'Ready to rock? the most beautiful of the night', 
    type: 'fast',
    amount: 0,
    value: 85.24,
    price: 85.24
  },
  { 
    id: 3, 
    banner: 'look3.jpg', 
    name: 'Social Look', 
    description: 'Be the most old woman and fuck my old ass baby',
    type: 'social',
    amount: 0,
    value: 116.70,
    price: 116.70
  },
  { id: 4, 
    banner: 'look4.jpeg', 
    name: 'Minimal Look', 
    description: 'Hello bitches! Choosing the look to go out is easy', 
    type: 'minimal',
    amount: 0,
    value: 76.70,
    price: 76.70
  },
];

const looksStock: TStockLoooks = [
  {
    id: 1,
    productId: 1,
    amount: 3,
  },
  {
    id: 2,
    productId: 2,
    amount: 3,
  },
  {
    id: 3,
    productId: 3,
    amount: 3,
  },
  {
    id: 4,
    productId: 4,
    amount: 3,
  },
  {
    id: 5,
    productId: 5,
    amount: 3,
  },
  {
    id: 6,
    productId: 6,
    amount: 3,
  },
];

export { looks, looksStock };
