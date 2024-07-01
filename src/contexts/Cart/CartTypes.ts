export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  buy_quantity: number;
};

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "INITIALIZE_CART"; payload: CartItem[] | [] };

export type CartState = {
  cartItems: CartItem[];
};

export const initialCartState: CartState = {
  cartItems: [],
};
