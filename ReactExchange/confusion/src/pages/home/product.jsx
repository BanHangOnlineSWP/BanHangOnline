import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';
import { PRODUCTS } from "../../products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const Product = () => {
  //const { id } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id]

  const [isCodeReceived, setIsCodeReceived] = useState(false);

  useEffect(() => {
    setIsCodeReceived(cartItems[PRODUCTS.id] > 0);
  }, [cartItems, PRODUCTS.id]);

  const handleAddToCart = () => {
    addToCart(PRODUCTS.id);
    setIsCodeReceived(true);
  };

  return (
    <div className="pro-container">
      {PRODUCTS.map((detail) => (
        <div className="pro" key={detail.id}>
          <img className="pro_img" src={detail.image} />

          <div className="des">
            <p>{detail.type}</p>
            <p><FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} /> {detail.duration}</p>

            <Link to={`description/${detail.id}`}>
              <h4>{detail.title}</h4>
            </Link>


            <div className="pro_active">
              <button
                className={`pro_bth ${isCodeReceived ? "code-received" : ""}`}
                onClick={isCodeReceived ? undefined : handleAddToCart}
              >
                {isCodeReceived
                  ? "ĐÃ LẤY MÃ"
                  : `NHẬN MÃ NGAY${cartItems[PRODUCTS.id] > 0 ? ` (${cartItems[PRODUCTS.id]})` : ""}`}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
