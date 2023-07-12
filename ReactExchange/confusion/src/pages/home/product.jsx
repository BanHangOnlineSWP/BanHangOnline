// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../../context/shop-context";
// import { Link } from "react-router-dom";
// import { PRODUCTS } from "../../products";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import LinearDeterminate from "../../components/progress/Progress";

// export const Product = () => {
//   // const { id } = props.data;
//   const { addToCart, cartItems } = useContext(ShopContext);

//   // const cartItemCount = cartItems[id]

//   const [isCodeReceived, setIsCodeReceived] = useState(false);

//   useEffect(() => {
//     setIsCodeReceived(cartItems[PRODUCTS.id] > 0);
//   }, [cartItems, PRODUCTS.id]);

//   const handleAddToCart = () => {
//     addToCart(PRODUCTS.id);
//     setIsCodeReceived(true);
//   };

//   return (
//     <div className="pro-container">
//       {PRODUCTS.map((detail) => (
//         <div className="pro" key={detail.id}>
//           <img className="pro_img" src={detail.image} />

//           <div className="des">
//             <p>{detail.type}</p>
//             <p>
//               <FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} />{" "}
//               {detail.duration}
//             </p>

//             <Link to={`description/${detail.id}`}>
//               <h4>{detail.title}</h4>
//             </Link>
//           </div>
//           <div>
//             <div>
//               <LinearDeterminate />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
// import { PRODUCTS } from "../../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import LinearDeterminate from "../../components/progress/Progress";

export const Product = (props) => {
  const { id, type, title, duration, image } = props.data || {};
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const cartItemCount = cartItems[id];

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
      <img className="pro_img" src={image} />

      <div className="des">
        <p>{type}</p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} />{" "}
          {duration}
        </p>

        <Link to={`description/${id}`}>
          <h4>{title}</h4>
        </Link>
      </div>
      <div>
        {/* <div>
            <LinearDeterminate />
          </div> */}
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
