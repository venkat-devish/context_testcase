import React from "react";
import cartState from "../../Context/ShopContext";
import Card from "../Card/Card";
import "./Cart.scss";

const Cart = () => {
  const { addToCart, cartItems, deleteFromCart, totalPrice } = cartState();

  return (
    <div>
      <h1>Your cart total: {totalPrice} Rs.</h1>
      {cartItems.map((el) => (
        <Card key={el.title} {...el} />
      ))}
    </div>
  );
};

export default Cart;
