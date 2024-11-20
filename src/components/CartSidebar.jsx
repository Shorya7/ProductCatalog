import React from 'react';
import { useCart } from './CartContext';

const CartSidebar = ({ isOpen, toggleSidebar }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className={`fixed top-0 right-0 bg-white w-64 h-full shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-2xl">X</button>
      <h2 className="text-xl font-bold p-4">Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="p-4 border-b">
            <div className="flex justify-between">
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSidebar;
