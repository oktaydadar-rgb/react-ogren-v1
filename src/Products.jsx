import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          title="Çanta"
          price="89"
        />
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
