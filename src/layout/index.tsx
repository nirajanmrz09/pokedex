/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./layout.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar";
const Layout = () => {
  const cartItem = useSelector((state: any) => state.cartItem);
  const navigare = useNavigate();
  // const sumCounts = cartItem.reduce(
  //   (total: any, item: any) => total + item.count,
  //   0
  // );
  // const disableNumber = window.location.pathname === "/cart";
  return (
    <div className="layoutContainer">
      <Navbar />
      <div className="bodyContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
