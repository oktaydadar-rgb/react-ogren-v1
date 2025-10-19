import "./ProductCard.css";
function ProductCard(props) {
  const image = props.image;
  const title = props.title;
  const price = props.price;

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
