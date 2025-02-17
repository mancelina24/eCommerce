import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Heart, ShoppingCart, Eye, Star, ChevronRight } from "lucide-react";
import { productsCard } from "../services/productDetailData";

const Products = () => {
  return (
    <div>
      <div></div>
      <div className=" text-black py-10 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <p className="text-center text-gray-400 mt-2 max-w-lg mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsCard.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-blue-500">English</span>
                <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-yellow-500 font-bold">
                    ⭐ {product.rating}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {product.sales} Sales
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-500 line-through">
                    {product.price}
                  </span>
                  <span className="text-green-500 font-bold">
                    {product.discountPrice}
                  </span>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
