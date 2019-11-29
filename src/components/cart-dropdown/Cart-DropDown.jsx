import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/Cart-Item";
import { connect } from "react-redux";
import "./Cart-DropDown.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropDown);