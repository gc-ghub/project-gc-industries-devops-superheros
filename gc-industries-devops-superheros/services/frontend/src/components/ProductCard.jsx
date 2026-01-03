import React from "react";

export default function ProductCard({ product, onOrder }) {
  return (
    <div className="product-card" style={{ animationDelay: `${product.animDelay}ms` }}>
      <div className="product-image-wrap">
        {/* product.image should be like "/images/Optimus_Prime_Terraform.jpg" (in public/images) */}
        <img src={product.image} alt={product.name} className="product-img" />
      </div>

      <h3 className="product-name">{product.name}</h3>

      <div className="product-price">
        ${product.price.toLocaleString()}
      </div>

      <button
        className="primary-btn"
        onClick={() => onOrder && onOrder(product)}
        aria-label={`Order ${product.name}`}
      >
        Order Now
      </button>
    </div>
  );
}
