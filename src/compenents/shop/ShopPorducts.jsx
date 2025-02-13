import React from "react";
import { pagination, products } from "../../services/shopdata";
import { FaCircle } from "react-icons/fa";

const ShopProducts = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto w-[25rem] px-10">
        <div className="grid grid-cols-1 justify-center items-center  md:w-[70rem] sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full shadow-md rounded-md overflow-hidden "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[19rem] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center font-semibold">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {product.department}
                </p>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-gray-500 line-through mr-2 text-center">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-green-500 font-bold text-center">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                  <FaCircle className="text-[#23a6f0] fill-[#23a6f0]" />
                  <FaCircle className="text-[#23856d] fill-[#23856d]" />
                  <FaCircle className="text-[#e77c40] fill-[#e77c40]" />
                  <FaCircle className="text-[#252b42] fill-[#252b42]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 text-gray-500 rounded-md hover:bg-gray-100">
            {pagination.first}
          </button>
          <button className="px-4 py-2 text-gray-500 rounded-md hover:bg-gray-100">
            {pagination.previous}
          </button>
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md ${
                  page === pagination.currentPage
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}
          <button className="px-4 py-2 text-gray-500 rounded-md hover:bg-gray-100">
            {pagination.next}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
