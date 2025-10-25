import React from "react";
import Products from "./components/Products/Products.jsx";
import Button from "./components/UI/Button.jsx";

function App() {
  return (
    <div>
      <Button type="danger" size="sm" title="Sepete Ekle3" />
      <h1>Hello App</h1>

      <Products />
    </div>
  );
}

export default App;
