import React, { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';
import { CartState, CartAction } from './CartTypes';
import cartReducer from './CartReducer';

const CartContext = createContext<{
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
}>({
  cartState: { cartItems: [] },
  cartDispatch: () => null,
});

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] });

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      cartDispatch({ type: 'INITIALIZE_CART', payload: JSON.parse(storedCartItems) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
