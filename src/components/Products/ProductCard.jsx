import { useState } from "react";
import "./ProductCard.css";
function ProductCard(props) {
  const image = props.image;
  const title = props.title;
  const price = props.price;
  const description = props.description;

  function handleTitleChange() {
    props.setTitleState("Title Değişti");
  }

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="product image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}</span>
        <p className="product-description">{description}</p>

        <button onClick={handleTitleChange}> Sepete Ekle</button>
      </div>
    </div>
  );
}

export default ProductCard;
