import React from "react";
import { products } from "../../services/productDetailData";

const ProductDetailCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.department}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-400 line-through">
                  {product.oldPrice}
                </span>
                <span className="text-green-600 font-semibold">
                  {product.newPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailCards;
