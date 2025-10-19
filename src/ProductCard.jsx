import "./ProductCard.css";
function ProductCard() {
  const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png";
  const title = "Çanta";
  const price = 56;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="product image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
