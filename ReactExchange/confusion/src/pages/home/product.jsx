import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Details } from "../../details";
=======
import { Link } from 'react-router-dom';
import { PRODUCTS } from "../../products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 43065916bed4761a37ded424bd9cce13eb094b90

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

<<<<<<< HEAD
      <div className="des">
        <p>{productType}</p>

        {Details.map((detail) => (
          // console.log(detail);
          <Link to={`description/${detail.id}`}>
            <h4>{detail.title}</h4>
          </Link>
        ))}
=======
          <div className="des">
            <p>{detail.type}</p>
            <p><FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} /> {detail.duration}</p>
>>>>>>> 43065916bed4761a37ded424bd9cce13eb094b90

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
