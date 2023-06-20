import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
// import { Tabs, Tab } from "react-materialize";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  // const { id, productDetail, productType, productImage } = props.data;

  // State
  const [voucherSuccess, setVoucherSuccess] = useState(false);
  const [selectedTab, setSelectedTab] = useState("your-vouchers");

  const handleUseNow = () => {
    // Logic to handle the "Use Now" button click
    // Set voucher success message and switch to "redeemed-vouchers" tab
    setVoucherSuccess(true);
    setSelectedTab("redeemed-vouchers");
  };

  return (
    <div className="cart">
      {voucherSuccess && selectedTab === "your-vouchers" && (
        <div className="voucher-success-message">
          Đổi voucher thành công! . Bạn có 3 ngày để sử dụng voucher! Vui lòng
          kiểm tra mail để lấy mã code để thanh toán và sử dụng!
          <button onClick={() => setSelectedTab("redeemed-vouchers")}>
            Xem voucher đã đổi
          </button>
        </div>
      )}

      <div className="cart-title">
        <h1> MÃ VOUCHER CỦA TÔI</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} handleUseNow={handleUseNow} />;
          }
        })}
      </div>

      {totalAmount !== 0 ? (
        <div className="continue">
          <button onClick={() => navigate("/")}> TIẾP TỤC MUA SẮM </button>
        </div>
      ) : (
        <div className="empty">
          <p> Oops, bạn chưa có voucher nào!</p>
        </div>
      )}
    </div>
  );
};
