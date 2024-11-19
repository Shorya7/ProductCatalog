const ProductDetails = ({ product, onBack }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        onClick={onBack}
        className="text-blue-500 mb-4 underline"
      >
        Back to Catalog
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-contain rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">Price: ₹{product.price}</p>
    </div>
  );
  
  export default ProductDetails;
  

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import productsData from "../assets/products.json";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = productsData.find(p => p.id === parseInt(id));

//   return (
//     <div>
//       <button onClick={() => navigate(-1)}>Back</button>
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>Price: ₹{product.price}</p>
//     </div>
//   );
// };

// export default ProductDetails;
