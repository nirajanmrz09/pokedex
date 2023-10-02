import React from "react";
import "./leftsidebar.scss";
import logo from "../assets/logo.svg";
import { MenuComponent } from "../components/menu";
const LeftSideBar = () => {
  return (
    <div className="leftsidebarContainer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <MenuComponent />
    </div>
  );
};

export default LeftSideBar;
