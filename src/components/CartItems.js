import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector(state=> state.cart.itemslist)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(cart => (
          <li key={cart.id} >
            <CartItem id={cart.id} price={cart.price} total={cart.totalPrice} name={cart.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
