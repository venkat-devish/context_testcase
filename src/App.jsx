import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopCart from "./components/cart/ShopCart";
import Layout from "./components/layout/Layout";
import Home from "./components/Home/Home";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<ShopCart />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
