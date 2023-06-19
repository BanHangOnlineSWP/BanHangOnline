import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productDetail, productType, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
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

          <button>SỬ DỤNG NGAY</button>
        </ul>
      </div>
    </div>
  );
};
