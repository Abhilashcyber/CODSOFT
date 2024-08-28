// src/components/ShoppingCart.js
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart, clearCart }) => {
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal().toFixed(2)}</h3>
          <div className="cart-buttons">
            <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
