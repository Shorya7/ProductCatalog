const ProductItem = ({ product, onSelect }) => (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
      onClick={onSelect}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-contain mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        className="mt-4 bg-secondary text-black px-4 py-2 rounded hover:bg-primary hover:text-white"
      >
        View Details
      </button>
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
