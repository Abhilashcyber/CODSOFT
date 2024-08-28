// src/components/ProductCatalog.js
import React from 'react';
import ProductItem from './ProductItem';
import './ProductCatalog.css';

const ProductCatalog = ({ products, addToCart }) => {
  return (
    <div className="catalog">
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
};

export default ProductCatalog;
