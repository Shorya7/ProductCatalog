import React from "react";
import { useCart } from "./CartContext";

const ProductItem = ({ product, onSelect }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  // Find the current quantity of the product in the cart
  const productInCart = cartItems.find((item) => item.id === product.id);
  const currentQuantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        onClick={onSelect}
        className="h-40 w-full object-contain mb-4 rounded hover:cursor-pointer"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <div className="flex space-x-3 max-[400px]:space-x-2">
        {currentQuantity > 0 ? (
          // Quantity Counter UI (when product is in the cart)
          <div className="flex items-center space-x-3 mt-4">
            <button
              onClick={() => updateQuantity(product.id, currentQuantity - 1)}
              className="bg-black text-secondary font-semibold text-lg w-8 h-8 rounded hover:bg-opacity-75"
              disabled={currentQuantity === 0}
            >
              -
            </button>
            <span className="text-lg font-semibold">{currentQuantity}</span>
            <button
              onClick={() => updateQuantity(product.id, currentQuantity + 1)}
              className="bg-black text-secondary font-semibold text-lg w-8 h-8 rounded hover:bg-opacity-75"
            >
              +
            </button>
          </div>
        ) : (
          // Add to Bag Button (when product is not in the cart)
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-opacity-70"
          >
            Add to Bag
          </button>
        )}
        <button
          className="mt-4 bg-secondary text-black px-4 py-2 rounded hover:bg-primary hover:text-white"
          onClick={onSelect}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

// import React from "react";
// import { Link } from "react-router-dom";

// const ProductItem = ({ product }) => (
//   <div className="product-item">
//     <img src={product.image} alt={product.name} />
//     <h3>{product.name}</h3>
//     <p>₹{product.price}</p>
//     <Link to={`/product/${product.id}`}>View Details</Link>
//   </div>
// );

// export default ProductItem;
