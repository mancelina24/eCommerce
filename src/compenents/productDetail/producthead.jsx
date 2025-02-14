import React from "react";

const producthead = () => {
  return (
    <nav className="flex items-center text-gray-500 text-sm">
      <a href="/" className="text-gray-900 font-semibold hover:text-blue-600">
        Home
      </a>
      <span className="mx-2">&gt;</span>
      <a href="/shop" className="hover:text-blue-600">
        Shop
      </a>
    </nav>
  );
};

export default producthead;
