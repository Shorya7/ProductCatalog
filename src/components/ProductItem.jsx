const ProductItem = ({ product, onSelect, addToCart  }) => (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        onClick={onSelect}
        className="h-40 w-full object-contain mb-4 rounded hover:cursor-pointer"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <div className="space-x-3 max-[400px]:space-x-2">
      <button
        className="mt-4 bg-secondary text-black px-4 py-2 rounded hover:bg-primary hover:text-white"
        onClick={onSelect}
      >
        View Details
      </button>
      <button 
        onClick={addToCart} 
        className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-opacity-70"
      >
        Add to Bag
      </button>
      </div>
    </div>
  );
  
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
