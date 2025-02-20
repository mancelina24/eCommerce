import React from "react";
import { Link } from "react-router-dom";

const TopCategories = ({ categories, viewMode }) => {
  const getGenderString = (gender) => {
    if (gender === "k") return "kadin";
    if (gender === "e") return "erkek";
    return "";
  };
  const gridClass =
    viewMode === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      : "flex flex-col"; // Style for list view

  return (
    <div className={`w-full ${gridClass}`}>
      {categories.map((category) => (
        <Link
          to={`/shop/${getGenderString(
            category.gender
          )}/${category.title.toLowerCase()}/${category.id}`}
          key={category.id}
          className={`block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 ${
            viewMode === "list" ? "flex items-center my-3 gap-4" : ""
          }`}
        >
          <img
            src={category.img}
            alt={category.title}
            className={`w-full h-48 object-cover object-center ${
              viewMode === "list" ? "w-32 h-32" : ""
            }`}
          />
          <div
            className={`p-4 bg-white ${viewMode === "list" ? "flex-1" : ""}`}
          >
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600">Rating: {category.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopCategories;
