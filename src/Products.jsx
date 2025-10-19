import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import ProductCardData from "./productsData.js";
function Products() {
  const image = ProductCardData[5].image;
  const title = ProductCardData[0].title;
  const price = ProductCardData[0].price;

  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard image={image} title={title} price={price} />
        <ProductCard
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          title="Çanta"
          price="34"
        />
      </div>
    </div>
  );
}

export default Products;
