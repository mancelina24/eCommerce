import React, { useState } from "react";
import { BsGrid, BsList } from "react-icons/bs";

const ShopHeroMenu = ({ onSort, onViewModeChange }) => {
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleSortClick = () => {
    onSort(selectedSort);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
};

  return (
    <div className="flex flex-col md:w-[80rem] md:flex-row gap-5 items-center justify-around bg-white py-2 px-4 2xl:justify-center 2xl:gap-x-55">
      <div className="text-gray-600 text-sm">Showing all results</div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-gray-600 text-sm">Views:</span>
          <div className="flex gap-2">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded transition-colors ${
                "grid" === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <BsGrid className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded transition-colors  ${
                "list" === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <BsList className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
      <button
          className="px-6 py-2 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600 transition-colors"
          onClick={handleSortClick}
        >
          Sort By
        </button>
        <select
          className="px-4 py-2 pr-8 border border-gray-200 rounded text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border border-gray-200 rounded text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleFilterChange}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600 transition-colors"
          onClick={() => dispatch(fetchProducts({ filter }))}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopHeroMenu;
