import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    if (item.trim() !== '') {
      setCart([...cart, { name: item, quantity: parseInt(quantity, 10) }]);
      setItem('');
      setQuantity(1);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = cart.map((cartItem, i) => 
      i === index ? { ...cartItem, quantity: parseInt(newQuantity, 10) } : cartItem
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity * 10, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item name"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            {cartItem.name} - Quantity: 
            <input
              type="number"
              value={cartItem.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
              min="1"
            />
          </li>
        ))}
      </ul>
      <h2>Total Price: ${calculateTotalPrice()}</h2>
    </div>
  );
};

export default ShoppingCart;
