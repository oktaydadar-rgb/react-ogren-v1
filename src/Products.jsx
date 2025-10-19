import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import ProductCardData from "./data/productsData.js";
function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard
          image={ProductCardData[0].image}
          title={ProductCardData[0].title}
          price={ProductCardData[0].price}
          description={ProductCardData[0].description}
        />
        <ProductCard
          image={ProductCardData[1].image}
          title={ProductCardData[1].title}
          price={ProductCardData[1].price}
          description={ProductCardData[1].description}
        />
      </div>
    </div>
  );
}

export default Products;
