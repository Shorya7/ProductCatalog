import React, { useState } from 'react';
import { useCart } from './CartContext';
import CartSidebar from './CartSidebar';
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-primary fixed top-0 z-50 w-full">
      <h1 className="text-2xl py-3 text-secondary font-bold text-center">Product Catalog</h1>
      <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleSidebar}>
        <div className="relative sm:right-8">
          {/* Cart Icon */}
          <IoBagHandleSharp className="text-secondary text-3xl" />
          
          {/* Cart Count (superscript) */}
          <span className="absolute -top-2 -right-3 bg-secondary text-black text-sm font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </div>
      </div>
      <CartSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
