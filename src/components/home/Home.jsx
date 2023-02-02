import React from "react";
import cartState from "../../context/CartContext";
import { shopData } from "../../data/shopData";
import Card from "../card/Card";

const Home = () => {
  const cart = cartState();
  console.log(cart);
  return (
    <>
      {console.log(shopData)}
      {shopData.map((el) => (
        <Card
          key={el.name}
          image={el.imageUrl}
          title={el.name}
          price={el.price}
        />
      ))}
    </>
  );
};

export default Home;
