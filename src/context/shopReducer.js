export const initialState = {
  totalAmount: 0,
  products: [],
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: action.payload.products,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: action.payload.products,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        totalAmount: action.payload.amount,
      };
    default:
      return initialState;
  }
};

export default shopReducer;
