// src/App.js
import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'BENGOO G9000 Stereo Gaming Headset', price: 21.99, image: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX466_.jpg' },
    { id: 2, name: 'I Phone 15', price:  747.92, image: 'https://m.media-amazon.com/images/I/51PtFHUPjBL.__AC_SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 3, name: 'Rolex GMT-Master', price: 13495, image: 'https://m.media-amazon.com/images/I/61V3cdYnItL._AC_SY741_.jpg' },
    { id: 4, name: 'Gskyer Telescope', price: 86.99, image: 'https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX466_.jpg' },
    { id: 5, name: 'Ninja Drip Coffee Maker', price: 179.99, image: 'https://m.media-amazon.com/images/I/81-vMuZ92ZL._AC_SX679_.jpg' },
    { id: 6, name: 'Hip Hop Hat', price: 15.99, image: 'https://m.media-amazon.com/images/I/71he0gxde4L._AC_SX569_.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <h1 className="title">Welcome to Our Shop</h1>
      <ProductCatalog products={products} addToCart={addToCart} />
      <ShoppingCart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
      />
    </div>
  );
}

export default App;


