import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ id, name, price }));
  }

  const select = useSelector((state) => state.cart.itemslist);
  console.log(select)


  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart} >Add to cart</button>
    </div>
  );
};

export default Product;
