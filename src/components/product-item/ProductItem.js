import React from "react";
import "./productitem.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          ⭐ {product.rating.rate} / 5
          <span className="rating-count">({product.rating.count} reviews)</span>
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;