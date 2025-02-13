import React from "react";
import { shophero } from "../../services/shopdata";
import { NavLink } from "react-router-dom";

const ShopHero = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
      }`}
    >
      <div className="mt-5">
        <h3 className="h3 text-center">Shop</h3>
        <div>
          <NavLink to="/home" className="link text-start mr-5">
            Home
          </NavLink>
          <NavLink to="/shop" className="link text-start mr-5">
            Shop
          </NavLink>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-5 overflow-hidden">
        {shophero.map((item, i) => (
          <div
            key={i}
            className="relative md:w-[13rem] md:h-[14rem] flex-shrink-0"
          >
            <img
              src={item}
              className="h-[19rem] w-[21rem] md:h-full md:w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
              <h5 className="h5 text-center">CLOTHS</h5>
              <p className="p text-white">5 ITEMS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopHero;
