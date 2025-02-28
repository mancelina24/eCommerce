import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductList,
  setFetchState,
  fetchProducts,
  setOffset,
  setLimit,
} from "../../store/actions/productActions";
import axiosInstance from "../../services/api";
import ShopHeroMenu from "./ShopHeroMenu";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { productList, fetchState, limit, offset, total } = useSelector(
    (state) => state.product
  );

  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [sortOrder, setSortOrder] = useState("rating"); // 'rating' or other sorting criteria
  const productsPerPage = 16;

  useEffect(() => {
    dispatch(setLimit(productsPerPage));
    dispatch(fetchProducts()); // Initial product fetch
  }, [dispatch]); // Re-fetch when limit or offset changes

  const handleSort = (sortBy) => {
    setSortOrder(sortBy);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handlePageChange = (pageNumber) => {
    // Calculate new offset based on page number and limit
    const newOffset = (pageNumber - 1) * limit;
    dispatch(setOffset(newOffset));
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

  const totalPages = Math.ceil(total / limit);
  const currentPage = offset / limit + 1; // Calculate current page from offset

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
          <button
            className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </button>

          <button
            className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Display a limited number of page numbers with ellipsis */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber = i + 1;

            if (totalPages > 5) {
              if (currentPage <= 3) {
                pageNumber = i + 1; // Show first 5 pages
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i; // Show last 5 pages
              } else {
                pageNumber = currentPage - 2 + i; // Show 5 pages around current page
              }
            }

            return (
              <button
                key={pageNumber}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <span className="text-gray-500">...</span>
          )}

          <button
            className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          <button
            className="px-4 py-2 border rounded-lg text-gray-500 hover:bg-gray-50"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
