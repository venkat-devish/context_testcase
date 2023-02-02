import React from "react";
import "./Card.scss";

const Card = ({ image, title, price }) => {
  return (
    <div className="card__container">
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      <button>+</button>
    </div>
  );
};

export default Card;
