import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>My Voucher</h1>
      {/* <img className="trending-img" src="assets/img/banners/Trending.png"
          alt=""
        /> */}
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {/* {totalAmount < 0 ? ( */}
      <div className="continue">
        <button onClick={() => navigate("/")}> Continue Shopping </button>
      </div>
      {/* ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )} */}
    </div>
  );
};
