import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { NavLink} from "react-router-dom";

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

        <NavLink to="/description">
          <h4>{productDetail}</h4>
        </NavLink>

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
