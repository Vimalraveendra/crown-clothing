import React from "react";
import "./CheckOut.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
const CheckOutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-item" onClick={() => clearItem(cartItem)}>
        <span role="img" aria-label="wingdings"></span>
        &#10060;
      </div>
    </div>
  );
};

const mapDispatchToProp = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProp)(CheckOutItem);
