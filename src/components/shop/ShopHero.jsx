import React, { useState } from "react";
import { BsGrid, BsList } from "react-icons/bs";
import TopCategories from "./TopCategories";

const ShopHero = ({ onSort, onViewModeChange }) => {
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleFilterClick = () => {
    onSort(selectedSort);
  };

  return (
    <div className="flex flex-col space-y-8">
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
          <select
            className="px-4 py-2 pr-8 border border-gray-200 rounded text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button
            onClick={handleFilterClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            Filter
          </button>
        </div>
      </div>
      
      <TopCategories />
    </div>
  );
};

export default ShopHero;