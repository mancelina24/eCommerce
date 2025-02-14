import React from "react";
import { NavLink } from "react-router-dom";

const PricingHero = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-80 md:mt-0" : "mt-0"
      }`}
    >
      <div className="mt-5">
        <h3 className="h3 text-center">Pricing</h3>
        <div>
          <NavLink to="/" className="link text-start mr-5">
            Home
          </NavLink>
          <NavLink to="/pricing" className="link text-start mr-5">
            Pricing
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
