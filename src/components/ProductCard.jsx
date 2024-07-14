
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.productName} />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="product-discount">Discount: {product.discountRate}</div>
    </div>
  );
};

export default ProductCard;
