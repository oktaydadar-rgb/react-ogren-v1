import { use, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import productsData from "../../data/productsData.js";
import AddProductForm from "./AddProductForm.jsx";
function Products() {
  const [titleState, setTitleState] = useState("Title");
  const [products, setProducts] = useState(productsData);

  //alt child  parent fonksiynu tetiklemek için fonksiyon yazıp props ile gönderebiliriz.
  //alt child dan parent veriyi parametre gönderebiliriz. Örnek addNewProduct function daki newProduct parametresi gibi.
  function addNewProduct(newProduct) {
    setProducts([...products, newProduct]); //spreaad bu şeklde sona ekler.
    setProducts([newProduct, ...products]); //spreaad bbu şekilde ekranın en başına ekler
  }

  return (
    <div className="products">
      <h2>Add Product Component</h2>
      <AddProductForm
        productsData={productsData}
        addNewProduct={addNewProduct}
      />
      <h2>Products Component</h2>
      <div className="products-wrapper">
        {products.map((product, index) => {
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
