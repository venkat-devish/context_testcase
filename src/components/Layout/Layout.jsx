import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
