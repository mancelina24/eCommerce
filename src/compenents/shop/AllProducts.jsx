import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductList,
  setFetchState,
  fetchProducts,
} from "../../store/actions/productActions";
import axiosInstance from "../../services/api";
import ShopHeroMenu from "./ShopHeroMenu";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { productList, fetchState } = useSelector((state) => state.product);

  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [sortOrder, setSortOrder] = useState("rating"); // 'rating' or other sorting criteria

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSort = (sortBy) => {
    setSortOrder(sortBy);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  let sortedProducts = [...productList];

  if (sortOrder === "Price: Low to High") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "Price: High to Low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "Popularity") {
    //This is just a default but if a popularity value exists use this sort function
    sortedProducts.sort((a, b) => b.sell_count - a.sell_count);
  } else {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (fetchState === "FETCH_ERROR") {
    return (
      <div className="text-red-500 text-center">Error loading products.</div>
    );
  }

  const products = Array.isArray(sortedProducts) ? sortedProducts : [];

  return (
    <div>
      <ShopHeroMenu
        onSort={handleSort}
        onViewModeChange={handleViewModeChange}
      />
      <div className="container mx-auto py-8">
        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1"
          } gap-6`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold! text-base! mt-2 text-center! ">
                  Graphic Design
                </h3>
                <p className="text-gray-600 text-sm! text-center! font-semibold!">
                  English Department
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <p className="text-gray-500 font bold! line-through!">
                    {product.price}
                  </p>
                  <p className="text-[#23856d] font-bold!">
                    {product.sell_count}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="w-4 h-4 rounded-full bg-[#23a6f0] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23a6f0]" />
                  <span className="w-4 h-4 rounded-full bg-[#23856d] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23856d]" />
                  <span className="w-4 h-4 rounded-full bg-[#e77c40] cursor-pointer hover:ring-2 ring-offset-2 ring-[#e77c40]" />
                  <span className="w-4 h-4 rounded-full bg-[#23856d] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23856d]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50">
            First
          </button>
          <button className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50">
            1
          </button>
          <button className="px-4 py-2 border rounded-lg bg-blue-500 text-white">
            2
          </button>
          <button className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
