import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {

  const select = useSelector((state) => state.cart.totalQuantity);
  const quantity = select;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
