import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import ProductCardData from "../../data/productsData.js";
function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        {ProductCardData.map((product, index) => (
          <ProductCard
            key={product.id ?? index}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
