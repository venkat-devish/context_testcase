import React, { useEffect, useState } from "react";
import cartState from "../../Context/ShopContext";
import "./Card.scss";

const Card = ({ image, title, price }) => {
  const { addToCart, cartItems, deleteFromCart } = cartState();
  const [isExisting, setisExisting] = useState(false);

  useEffect(() => {
    const existingProduct = cartItems.find(
      (product) => product.title === title
    );
    if (existingProduct) {
      setisExisting(true);
    } else {
      setisExisting(false);
    }
  }, [cartItems, title]);

  const _handleClick = () => {
    const product = { image, title, price };
    isExisting ? deleteFromCart(product) : addToCart(product);
  };

  return (
    <div className="card__container">
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <button onClick={_handleClick}>{isExisting ? "-" : "+"}</button>
    </div>
  );
};

export default Card;
