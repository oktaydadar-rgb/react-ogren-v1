import { use, useState } from "react";
import Button from "../UI/Button";
import "./AddProductForm.css";
import ProductInfo from "./ProductInfo";
import productInputs from "../../data/productInputs";

function AddProductForm({ addNewProduct }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value }); //spread operator ile önceki değerleri koruyoruz.
    //javascript computed properties
  }

  function handleSubmit(event) {
    event.preventDefault();
    //productsData.push(product);
    //console.log(productsData);

    if (product.title.trim() === "") {
      alert("Title inputu boş bırakılmaz.");
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };
    console.log(newProduct);
    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInfo
          key={input.name}
          handleChange={handleChange}
          //type={input.type}
          //name={input.name}
          //placeholder={input.placeholder}
          //label={input.label}
          {...input}

          //type={input.type}//name={input.name}//placeholder={input.placeholder}//label={input.label} kodu yerine {...input} şekilde yazşlabiliriz
        />
      ))}

      <Button type="primary">Ürünü ekle</Button>
    </form>
  );
}

export default AddProductForm;
