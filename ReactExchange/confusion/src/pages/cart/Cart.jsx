import React, { useContext, useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    // checkout,
    // setCartItems,
    removeFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [toggleState, setToggleState] = useState(1);
  // const [usedItems, setUsedItems] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [voucherDaSuDungItems, setVoucherDaSuDungItems] = useState([]);

  const handleDungNgay = (productId) => {
    const itemToMove = PRODUCTS.find((item) => item.id === productId);
    setVoucherDaSuDungItems((prevItems) => [...prevItems, itemToMove]);
    console.log(voucherDaSuDungItems);
    removeFromCart(productId);
    updateCartItemCount(0, productId);
  };

  return (
    <div className="container">
      {/* Thanh Tabs  */}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs off-tabs"}
          onClick={() => toggleTab(1)}
        >
          VOUCHER CỦA TÔI
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs off-tabs"}
          onClick={() => toggleTab(2)}
        >
          VOUCHER ĐÃ SỬ DỤNG
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs off-tabs"}
          onClick={() => toggleTab(3)}
        >
          VOUCHER ĐÃ HẾT HẠN
        </button>
      </div>

      {/* NỘI DUNG TABS  */}

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="cart">
            <div className="cart-items">
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return (
                    <CartItem data={product} handleDungNgay={handleDungNgay} />
                  );
                }
              })}
            </div>

            {totalAmount !== 0 ? (
              <div className="continue">
                <button onClick={() => navigate("/")}>
                  {" "}
                  TIẾP TỤC MUA SẮM{" "}
                </button>
              </div>
            ) : (
              <div className="empty">
                <p> Oops, bạn chưa có voucher nào!</p>
              </div>
            )}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="cart">
            <div className="cart-items">
              {voucherDaSuDungItems.length > 0 ? (
                voucherDaSuDungItems.map((item) => (
                  <div className="cartItem">
                    <div className="cart-img" key={item.id}>
                      <img src={item.image} alt="Product" />
                    </div>
                    <div className="cart-des">
                      <p className="cart-detail">{item.title}</p>
                      <p className="cart-date">Date:{item.duration}</p>
                      <ul className=" cart-bth-used">
                        <p>ĐÃ SỬ DỤNG</p>
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty">
                  <p> Oops, bạn chưa có voucher nào!</p>
                </div>
              )}
            </div>
          </div>
          <div className="continue">
            <button onClick={() => navigate("/")}> TIẾP TỤC MUA SẮM </button>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
};
