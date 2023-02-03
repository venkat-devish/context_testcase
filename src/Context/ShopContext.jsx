import { createContext, useContext, useReducer } from "react";
import { initialState, shopReducer } from "./shopReducer";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (products) => {
    const updatedCartItems = state.cartItems.concat(products);
    updatePrice(updatedCartItems);
    dispatch({
      type: "ADD_TO_CART",
      cartItems: updatedCartItems,
    });
  };

  const deleteFromCart = (product) => {
    const updatedCartItems = state.cartItems.filter(
      (item) => item.title !== product.title
    );
    updatePrice(updatedCartItems);

    dispatch({
      type: "DELETE_FROM_CART",
      cartItems: updatedCartItems,
    });
  };

  const updatePrice = (products) => {
    let updatedAmount = 0;
    products.forEach((el) => (updatedAmount += el.price));
    console.log(updatedAmount);

    dispatch({
      type: "UPDATE_PRICE",
      totalPrice: updatedAmount,
    });
  };

  const value = {
    cartItems: state.cartItems,
    totalPrice: state.totalPrice,
    addToCart,
    deleteFromCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const cartState = () => {
  const cartCtx = useContext(ShopContext);
  return cartCtx;
};

export default cartState;
