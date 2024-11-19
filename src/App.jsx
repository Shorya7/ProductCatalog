import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./App.css"
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closePopup = () => {
    setSelectedProduct(null); // Close popup when close button clicked
  };


  return (
    <>
    <Navbar/>
    <div className={`min-h-screen relative top-14 bg-gray-100 p-4 ${selectedProduct ? "overflow-hidden" : ""}`}>
      <div className={`${selectedProduct ? "blur-sm" : ""}`}>
        <ProductList onSelectProduct={setSelectedProduct} />
      </div>
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closePopup} />
      )}
    </div>
    </>
  );
};

export default App;



// import ProductList from './components/ProductList'
// import ProductDetails from './components/ProductDetails'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import './App.css'

// function App() {

//   return (
//     <>
//     <Router>
//       <Routes>
//       <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App
