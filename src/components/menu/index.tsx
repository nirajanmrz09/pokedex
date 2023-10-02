import React, { useState } from "react";
import "./menu.scss";
import activeDashboard from "../../assets/activeDashboard.svg";
type MenuComponentType = {
  label: string;
};
export const MenuComponent = (props: MenuComponentType) => {
  const { label } = props;
  const [isActive, setIsActive] = useState(true);
  return (
    <div className={`menuContainer ${isActive ? "menuActive" : ""}`}>
      <img src={activeDashboard} alt={label} />
      MenuComponent
    </div>
  );
};
