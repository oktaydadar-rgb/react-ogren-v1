import { use, useState } from "react";
import Button from "../UI/Button";
import "./AddProductForm.css";
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
    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };
    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {product.title}
      <label>
        Title :
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Bir ürün ismi giriniz!"
        />
      </label>
      <label>
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Bir ürün fiyatı giriniz!"
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Bir ürün görseli giriniz!"
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          onChange={handleChange}
          name="description"
          placeholder="Bir ürün açıklaması giriniz!"
        />
      </label>
      <Button type="primary">Ürünü ekle</Button>
    </form>
  );
}

export default AddProductForm;
