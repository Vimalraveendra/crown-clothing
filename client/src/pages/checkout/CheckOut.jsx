import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-item/CheckOut-Item";
import StripeCheckoutButton from "../../components/stripe-checkout/StripeButton";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";
import "./CheckOut.scss";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => {
      return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
    })}
    <div className="total">TOTAL: $ {total}</div>
    <div className="test-warning">
      *Please use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 -Exp: 01/22 -Cvv:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckOutPage);
