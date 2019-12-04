import React from "react";
import "./CheckOut.scss";

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-item">
        <span role="img" aria-label="wingdings">
          &#10060;
        </span>
      </div>
    </div>
  );
};
export default CheckOutItem;
