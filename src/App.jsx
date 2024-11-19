import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./App.css"
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-4">
      {!selectedProduct ? (
        <ProductList onSelectProduct={setSelectedProduct} />
      ) : (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
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
