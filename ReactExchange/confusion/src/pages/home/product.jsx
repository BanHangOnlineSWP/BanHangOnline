import React from "react";
// import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import LinearDeterminate from "../../components/progress/Progress";

export const Product = (props) => {
  const { id, type, title, duration, image } = props.data || {};

  return (
    <div className="pro" key={id}>
      <img className="pro_img" src={image} alt=""/>

      <div className="des">
        <p>{type}</p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} />{" "}
          {duration}
        </p>

        <Link to={`description/${id}`}>
          <h4 style={{fontWeight: "bold"}}>{title}</h4>
        </Link>
      </div>
      <div>
        <div>
          <LinearDeterminate/>
        </div>
      </div>
    </div>
  );
};
