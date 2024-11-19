import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch products using Axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/5ec0ffc0-8611-4f91-96d9-88d000ae4aed"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Update filtered products on search or category change
  useEffect(() => {
    const filter = products.filter(product => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filter);
  }, [searchQuery, selectedCategory, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-6">
        <SearchBar setSearchQuery={setSearchQuery} />
        <CategoryFilter
          categories={[...new Set(products.map(p => p.category))]}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onSelect={() => onSelectProduct(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
