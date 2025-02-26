import React from "react";
import HeaderShop from "../../layout/HeaderShop";
import TopCategories from "./TopCategories";
import ShopHeroMenu from "./ShopHeroMenu";
import FooterShop from "../../layout/FooterShop";

import { useDispatch, useSelector } from "react-redux";
import {
  setProductList,
  setFetchState,
  fetchProducts,
  setOffset,
  setLimit,
} from "../../store/actions/productActions";

const ShopProducts = () => {
  const dispatch = useDispatch();
  const { productList, fetchState, limit, offset, total } = useSelector(
    (state) => state.product
  );

  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [sortOrder, setSortOrder] = useState("rating"); // 'rating' or other sorting criteria
  const productsPerPage = 16;

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
      <HeaderShop />
      <TopCategories />
      <ShopHeroMenu />
      <div>{`kodlar buraya yazılacak`}</div>
      <FooterShop />
    </div>
  );
};

export default ShopProducts;
