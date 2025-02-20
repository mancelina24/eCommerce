import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions/productActions";
import TopCategories from "../../compenents/categories/TopCategories"; // Adjust path
import ShopHeroMenu from "./shopHeroMenu";

const ShopHero = ({ isMenuOpen }) => {
  const dispatch = useDispatch();
  const { categories, fetchState } = useSelector((state) => state.product);

  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState("Popularity");
  const [sortedCategories, setSortedCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    // Update sorted categories when categories or sortOrder changes
    if (categories && categories.length > 0) {
      const newSortedCategories = [...categories]; // Copy categories
      if (sortOrder === "Price: Low to High") {
        newSortedCategories.sort((a, b) => a.rating - b.rating); // low to high
      } else if (sortOrder === "Price: High to Low") {
        newSortedCategories.sort((a, b) => b.rating - a.rating); // high to low
      } else {
        // Default to popularity (high to low)
        newSortedCategories.sort((a, b) => b.rating - a.rating);
      }
      setSortedCategories(newSortedCategories);
    }
  }, [categories, sortOrder]);

  if (fetchState === "FETCHING") {
    return <p className="text-center py-4">Loading categories...</p>;
  }

  if (fetchState === "FETCH_ERROR") {
    return (
      <p className="text-center py-4 text-red-500">
        Error fetching categories.
      </p>
    );
  }
  const handleSort = (sortBy) => {
    setSortOrder(sortBy);
    // Implement your sorting logic here based on sortBy
    // You might need to dispatch another action to update the product list
    console.log("Sorting by:", sortBy);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const topCategories = sortedCategories.slice(0, 5);

  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
      }`}
    >
      {/* Title and Breadcrumbs */}
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-semibold mb-2">Shop</h3>
        <div className="flex flex-row gap-2 text-gray-500 text-sm">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <span>/</span>
          <NavLink to="/shop" className="hover:text-blue-500">
            Shop
          </NavLink>
        </div>
      </div>
      {/* Top Categories */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-start gap-6 overflow-hidden">
        <TopCategories categories={topCategories} viewMode={viewMode} />
      </div>
      <div className="w-full max-w-6xl">
        {/* Shop Hero Menu (Sorting, Filtering) */}
        <ShopHeroMenu
          onSort={handleSort}
          onViewModeChange={handleViewModeChange}
        />
      </div>
    </div>
  );
};

export default ShopHero;
