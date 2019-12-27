import React from "react";
import CustomButtom from "../custom-button/CustomButton";
import "./Cart-DropDown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButtom />
    </div>
  );
};

export default CartDropDown;
