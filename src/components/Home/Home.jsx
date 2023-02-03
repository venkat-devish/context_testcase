import React from "react";
import cartState from "../../Context/ShopContext";
import { shopData } from "../../data/shopData";
import Card from "../Card/Card";
import "./Home.scss";

const Home = () => {
  const cart = cartState();
  console.log(cart);
  return (
    <div>
      {shopData.map((el) => (
        <Card
          key={el.name}
          title={el.name}
          price={el.price}
          image={el.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;

// name: "Shoes",
// price: 400,
// imageUrl:
