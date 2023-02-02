import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (products) => {
    const updatedCart = cartState.products.concat(products);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = cartState.products.filter(
      (prod) => prod.name !== product.name
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products) => {
    let updatedAmount = 0;
    products.array.forEach((element) => {
      updatedAmount += element.price;
    });
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        totalAmount: updatedAmount,
      },
    });
  };

  const value = {
    totalAmount: cartState.totalAmount,
    products: cartState.products,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const cartState = () => {
  const cartCtx = useContext(CartContext);
  return cartCtx;
};

export default cartState;
