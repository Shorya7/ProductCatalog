import React from "react";
import { IoClose } from "react-icons/io5";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg transform transition-transform duration-300 scale-100"
        style={{ animation: "popupIn 0.3s ease-out" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold">Price: ₹{product.price}</p>
      </div>
    </div>
  );
};

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
