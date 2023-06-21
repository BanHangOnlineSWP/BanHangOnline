import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productDetail, productType, productImage } = props.data;
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
        <img src={productImage} alt="Product" />
      </div>
      <div className="cart-des">
        <p className="cart-detail">{productDetail}</p>
        <p className="cart-date">Date:</p>
        <ul className="cart-bth">
          <button onClick={() => removeFromCart(id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
          <button onClick={() => props.handleDungNgay(id)}>SỬ DỤNG NGAY</button>
        </ul>
      </div>
    </div>
  );
};
