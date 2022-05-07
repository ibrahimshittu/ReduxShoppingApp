import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/cartSlice";
import "./Cart.css";
const Cart = () => {

  const quantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch()
  const showCart = () => {
     dispatch(setShowCart())
  }
  return (
    <div className="cartIcon" onClick={showCart}>
      <h3  >Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
