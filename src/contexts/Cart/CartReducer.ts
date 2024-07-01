import { CartState, CartAction } from "./CartTypes";

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "INITIALIZE_CART":
      return { ...state, cartItems: action.payload };
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].buy_quantity =
          action.payload.buy_quantity;
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case "REMOVE_FROM_CART":
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
