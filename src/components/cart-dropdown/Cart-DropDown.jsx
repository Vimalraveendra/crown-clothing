import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/Cart-Item";
import { connect } from "react-redux";
import "./Cart-DropDown.scss";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        Go TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
