import React from "react";
import { FaCircle } from "react-icons/fa";
import { productCategory } from "../../services/homedata";
import { NavLink } from "react-router-dom";

const ProductCategory = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center mb-10">
      <div className="text-center">
        <h4 className="h4 text-black">Featured Products</h4>
        <h3 className="h3">BESTSELLER PRODUCTS</h3>
        <p className="p">Problems trying to resolve the conflict between </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {productCategory.map((item, index) => (
          <div key={index} className="my-5 text-center">
            <img src={item.image} alt="." className="w-[19rem] h-[27rem]" />
            <h5 className="h5 text-black my-2">{item.title}</h5>
            <NavLink to="" className="link">
              {item.department}
            </NavLink>
            <div className="flex flex-row gap-2 my-2 justify-center items-center">
              <span className="text-gray-500 line-through mr-2 text-center">
                ${item.originalPrice.toFixed(2)}
              </span>
              <span className="text-green-500 font-bold text-center">
                ${item.price.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <FaCircle className="text-[#23a6f0] fill-[#23a6f0]" />
              <FaCircle className="text-[#23856d] fill-[#23856d]" />
              <FaCircle className="text-[#e77c40] fill-[#e77c40]" />
              <FaCircle className="text-[#252b42] fill-[#252b42]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
