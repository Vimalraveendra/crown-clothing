import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./Cart-DropDown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
