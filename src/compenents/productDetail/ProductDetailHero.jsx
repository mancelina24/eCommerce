import React, { useEffect, useState } from "react";
import { heroImage } from "../../services/productDetailData";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

const ProductDetailHero = () => {
  const [thumbnails, setThumbnails] = useState([heroImage[0], heroImage[1]]);

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  useEffect(() => {
    setMainImage(thumbnails[mainImageIndex]);
  }, [mainImageIndex, thumbnails]);

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
  };

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <div className="relative">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg shadow-md aspect-video"
            />
            {/* Arrows for image sliding (optional) */}

            <button className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlePrevImage}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleNextImage}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="mt-4 flex space-x-4">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-20 object-cover rounded-md shadow-sm cursor-pointer hover:opacity-75"
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Floating Phone
          </h1>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, index) => (
              <Star
                key={index}
                className="w-4 h-4 text-yellow-400 fill-current"
              ></Star>
            ))}
            <Star className="w-4 h-4 text-yellow-400 fill-none stroke-current stroke-2"></Star>
            <span className="ml-2 text-gray-600">10 Reviews</span>
          </div>

          <p className="mt-4 text-3xl font-bold text-gray-900">$1,139.33</p>
          <p className="text-green-500 mt-1">Availability : In Stock</p>

          <p className="mt-6 text-gray-700">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6 flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-800 cursor-pointer"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-4 text-gray-600 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Select Options
            </button>
            <button className="rounded-full border border-gray-300 hover:bg-gray-100 p-2">
              <Heart
                className={`cursor-pointer ${
                  isFavorited
                    ? "fill-red-500 text-red-500"
                    : "hover:text-red-500"
                }`}
                fill={isFavorited ? "currentColor" : "none"}
                onClick={() => setIsFavorited(!isFavorited)}
              />
            </button>
            <button className="rounded-full border border-gray-300 hover:bg-gray-100 p-2">
              <ShoppingCart className="cursor-pointer hover:text-green-500" />
            </button>
            <button className="rounded-full border border-gray-300 hover:bg-gray-100 p-2">
              <Eye className="cursor-pointer hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHero;
