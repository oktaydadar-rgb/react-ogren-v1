import React from "react";

function ProductInfo({ label, type, name, placeholder, handleChange }) {
  console.log(label, type, name, placeholder, handleChange);
  return (
    <label>
      {label} :
      <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export default ProductInfo;
