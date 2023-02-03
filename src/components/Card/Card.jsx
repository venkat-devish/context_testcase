import React, { useState } from "react";
import cartState from "../../Context/ShopContext";
import "./Card.scss";

const Card = ({ image, title, price }) => {
  const { addToCart, cartItems, deleteFromCart, totalPrice } = cartState();
  const [isExisting, setisExisting] = useState(false);

  cartItems.map((el) => {
    if (el.title === title) setisExisting(true);
  });

  console.log(isExisting);

  // cartItems.map((el) => console.log(el.title));
  // console.log(title, "sx");
  return (
    <div className="card__container">
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <button onClick={() => addToCart({ image, title, price })}>+</button>
    </div>
  );
};

export default Card;
