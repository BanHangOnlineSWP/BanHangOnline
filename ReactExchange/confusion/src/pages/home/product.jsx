import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { Details } from "../../details";

export const Product = (props) => {
  const { id, productDetail, productType, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id]

  const [isCodeReceived, setIsCodeReceived] = useState(false);

  useEffect(() => {
    setIsCodeReceived(cartItems[id] > 0);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    addToCart(id);
    setIsCodeReceived(true);
  };

  return (
    <div className="pro" key={id}>
      <img className="pro_img" src={productImage} />

      <div className="des">
        <p>{productType}</p>

        {Details.map((detail) => (
          // console.log(detail);
          <Link to={`description/${detail.id}`}>
            <h4>{detail.title}</h4>
          </Link>
        ))}

        <div className="pro_active">
          <button
            className={`pro_bth ${isCodeReceived ? "code-received" : ""}`}
            onClick={isCodeReceived ? undefined : handleAddToCart}
          >
            {isCodeReceived
              ? "ĐÃ LẤY MÃ"
              : `NHẬN MÃ NGAY${cartItems[id] > 0 ? ` (${cartItems[id]})` : ""}`}
          </button>
        </div>
      </div>
    </div>
  );
};
