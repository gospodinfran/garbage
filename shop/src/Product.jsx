const Product = ({ id, image, title, price, description, onAddToCart }) => {

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{description}</p>
        <button onClick={() => onAddToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
