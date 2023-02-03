export const initialState = {
  totalPrice: 0,
  cartItems: [],
};

export const shopReducer = (state, { cartItems, totalPrice, type }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems,
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: cartItems,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        totalPrice,
      };
    default:
      return state;
  }
};
