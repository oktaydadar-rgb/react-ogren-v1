import { useState } from "react";
import Button from "../UI/Button";
import "./ProductCard.css";
function ProductCard(props) {
  const { id, image, title, price, description, onDeleteProduct } = props;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="product image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}</span>
        <p className="product-description">{description}</p>

        <Button type="danger" onclick={() => onDeleteProduct(id)}>
          Ürün Sil{" "}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
