import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
// import { PRODUCTS } from "../../products";

export const CartItem = (props) => {
  const { id, title, duration, image } = props.data || {};

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    setCartItems,
  } = useContext(ShopContext);

  const handleDungNgay = (productId) => {
    const updatedVoucherDaLayItems = Object.values(cartItems).filter(
      (amount) => amount > 0
    );
    const updatedCartItems = { ...cartItems };
    updatedCartItems[productId] = 0;
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cartItem">
      <div className="cart-img">
        <img src={image} alt="Product" />
      </div>
      <div className="cart-des">
        <p className="cart-detail">{title}</p>
        <p className="cart-date">Date:{duration}</p>
        <ul className="cart-bth">
          <button onClick={() => removeFromCart(id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
          <button onClick={() => handleDungNgay(id)}>SỬ DỤNG NGAY</button>
        </ul>
      </div>
    </div>
  );
};
