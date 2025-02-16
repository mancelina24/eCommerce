import React from "react";

const ProductHead = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
      }`}
    >
      <nav className="flex items-center text-gray-500 text-sm">
        <a href="/" className="text-gray-900 font-semibold hover:text-blue-600">
          Home
        </a>
        <span className="mx-2">&gt;</span>
        <a href="/shop" className="hover:text-blue-600">
          Shop
        </a>
      </nav>
    </div>
  );
};

export default ProductHead;
