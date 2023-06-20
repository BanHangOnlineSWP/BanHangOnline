import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { NavLink, Link } from "react-router-dom";

export const CartItem = (props) => {
  const { id, productDetail, productType, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const handleUseNowClick = () => {
    props.handleUseNow(productDetail);
  };

  return (
    <div className="cartItem">
      <div className="cart-img">
        <img src={productImage} />
      </div>
      <div className="cart-des">
        <p className="cart-detail"> {productDetail}</p>
        <p className="cart-date"> Date: </p>
        <ul className="cart-bth">
          <button onClick={() => removeFromCart(id)}>
            <i class="fa-regular fa-trash-can"></i>
            <input
              type="hidden"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
          </button>
          <NavLink to="/use">
            <button>SỬ DỤNG NGAY</button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
