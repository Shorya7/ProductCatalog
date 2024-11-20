import React, { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";

const CategoryFilter = ({ categories, selectedCategories, setSelectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-4" ref={menuRef}>
      <button
        className="bg-black flex items-center text-secondary px-4 h-10 rounded hover:bg-white hover:border hover:text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaFilter className="mr-1"/>
        Filters
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-md p-4 z-20">
          <h3 className="text-lg font-semibold mb-2">Categories:</h3>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 hover:cursor-pointer">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;



// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const CategoryFilter = ({ categories, setSelectedCategory }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsOpen((prev) => !prev); // Toggle the dropdown state
//   };

//   return (
//     <div className="relative w-full sm:w-1/4">
//       <div
//         className="relative"
//         onClick={handleDropdownToggle} // Toggle the dropdown on click
//       >
//         <select
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="border rounded-lg px-4 py-2 w-full appearance-none bg-white"
//           onBlur={() => setIsOpen(false)} // Close dropdown on losing focus
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//         <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-primary pointer-events-none">
//           {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryFilter;
