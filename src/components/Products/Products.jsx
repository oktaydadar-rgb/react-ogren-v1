import { useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import productsData from "../../data/productsData.js";
import AddProductForm from "./AddProductForm.jsx";
function Products() {
  const [titleState, setTitleState] = useState("Title");
  return (
    <div className="products">
      <h2>Add Product Component</h2>
      <AddProductForm />
      <h2>Products Component</h2>
      <div className="products-wrapper">
        {productsData.map((product, index) => {
          return (
            <ProductCard
              key={product.id ?? index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              titleState={titleState}
              setTitleState={setTitleState}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
