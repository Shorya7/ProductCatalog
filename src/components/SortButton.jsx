import React, { useState, useEffect, useRef } from "react";
import { RiSortDesc } from "react-icons/ri";

const SortButton = ({ sortOption, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsOpen(false); // Close the menu after selecting an option
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-4">
      {/* Button */}
      <button
        ref={buttonRef}
        className="bg-black flex items-center text-secondary px-4 h-10 w-[6.5rem] rounded hover:bg-white hover:border hover:text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiSortDesc className="mr-1" />
        Sort by
      </button>

      {/* Submenu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-md p-4 z-20"
          style={{ right: 0 }}
        >
          <div className="flex flex-col gap-3">
            <label className="flex items-center space-x-3 hover:cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="popularity"
                checked={sortOption === "popularity"}
                onChange={() => handleSortChange("popularity")}
              />
              <span className="text-gray-700">Popularity</span>
            </label>
            <label className="flex items-center space-x-3 hover:cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="lowToHigh"
                checked={sortOption === "lowToHigh"}
                onChange={() => handleSortChange("lowToHigh")}
              />
              <span className="text-gray-700">Low to High</span>
            </label>
            <label className="flex items-center space-x-3 hover:cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="highToLow"
                checked={sortOption === "highToLow"}
                onChange={() => handleSortChange("highToLow")}
              />
              <span className="text-gray-700">High to Low</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
