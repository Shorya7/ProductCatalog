import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortButton from "./SortButton";

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("popularity"); // Default sort by popularity
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
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

  // Update filtered products on search, category, or sort option change
  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategories =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return matchesSearch && matchesCategories;
    });

    // Apply sorting
    if (sortOption === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategories, sortOption, products]);

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
    <div className={`relative ${sortOption === "isOpen" ? "blur-sm" : ""}`}>
      <div className="flex justify-between h-16">
        <SearchBar setSearchQuery={setSearchQuery} />
        <div className="flex items-center space-x-6">
        <CategoryFilter
          categories={[...new Set(products.map((p) => p.category))]}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <SortButton sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
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
