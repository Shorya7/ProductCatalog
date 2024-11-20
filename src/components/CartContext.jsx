import React, { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Provider component to wrap around the app and provide the cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to the cart (initial quantity = 1)
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity is zero or less, remove product from the cart
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      // Update the quantity if it's greater than 0
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Remove a product from the cart completely
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
