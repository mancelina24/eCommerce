import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setOffset,
  setLimit,
} from "../../store/actions/productActions";
import ShopHeroMenu from "./ShopHeroMenu";
import { useParams, Link } from "react-router-dom"; // Import Link

const ShopProducts = () => {
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState("rating");
  const productsPerPage = 16;
  const { gender, categoryName, categoryId } = useParams();
  const { productList, total, fetchState, limit, offset } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(setLimit(productsPerPage));
  }, [dispatch]);

  useEffect(() => {
    if (categoryId && gender) {
      dispatch(fetchProducts(categoryId, gender));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, categoryId, gender, offset, limit]);

  const handleSort = (sortBy) => {
    setSortOrder(sortBy);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handlePageChange = (pageNumber) => {
    const newOffset = (pageNumber - 1) * limit;
    dispatch(setOffset(newOffset));
  };
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation if clicked on the button
    dispatch(addToCart(product));
  };

  // Client-side sorting (same as before, no changes needed here)
  let sortedProducts = [...productList];
  if (sortOrder === "Price: Low to High") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "Price: High to Low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "Rating: High to Low") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortOrder === "Rating: Low to High") {
    // Corrected
    sortedProducts.sort((a, b) => a.rating - b.rating);
  } else if (sortOrder === "Popularity") {
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

  const productsToShow = Array.isArray(sortedProducts) ? sortedProducts : [];
  const totalPages = Math.ceil(total / limit);
  const currentPage = offset / limit + 1;

  // Helper function to create the product slug
  const createProductSlug = (productName) => {
    return productName.toLowerCase().replace(/ /g, "-");
  };

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
          {productsToShow.map((product) => (
            // Wrap the entire product card in a Link
            <Link
              to={`/shop/${gender}/${categoryName}/${categoryId}/${createProductSlug(
                product.name
              )}/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold! text-base! mt-2 text-center! truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs! text-center! font-semibold! truncate">
                  {product.description}
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <p className=" text-gray-500 font bold! line-through!">
                    ${(product.price * 1.2).toFixed(2)}
                  </p>
                  <p className=" text-[#23856d] font-bold!">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Placeholder color circles */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="w-4 h-4 rounded-full bg-[#23a6f0] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23a6f0]" />
                  <span className="w-4 h-4 rounded-full bg-[#23856d] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23856d]" />
                  <span className="w-4 h-4 rounded-full bg-[#e77c40] cursor-pointer hover:ring-2 ring-offset-2 ring-[#e77c40]" />
                  <span className="w-4 h-4 rounded-full bg-[#23856d] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23856d]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination (no changes needed here) */}
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

export default ShopProducts;
