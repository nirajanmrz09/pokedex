/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import "./layout.scss";

import { Navbar } from "../components/navbar";
const Layout = () => {
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
