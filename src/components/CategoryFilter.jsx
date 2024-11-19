import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CategoryFilter = ({ categories, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the dropdown state
  };

  return (
    <div className="relative w-full sm:w-1/4">
      <div
        className="relative"
        onClick={handleDropdownToggle} // Toggle the dropdown on click
      >
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full appearance-none bg-white"
          onBlur={() => setIsOpen(false)} // Close dropdown on losing focus
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary pointer-events-none">
          {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
