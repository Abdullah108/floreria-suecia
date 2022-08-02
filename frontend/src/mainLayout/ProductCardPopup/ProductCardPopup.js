import React from "react";
import "./ProductCardPopup.scss";

const ProductCardPopup = ({ value }) => {
  const { src, title, price } = value;
  return (
    <div className="productCard">
      <div className="cardImage">
        <img alt="" src={src.default} />
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardPrice">{price}</div>
    </div>
  );
};

export default ProductCardPopup;
