import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-xl md:hidden">
        {isMenuOpen ? (
          <FaTimes className="text-black" />
        ) : (
          <FaBars className="text-black" />
        )}
      </button>
      <div>
        <ul className={`${isMenuOpen ? "flex" : "hidden"} mt-10 flex-col `}>
          <li>
            <NavLink className="md:hidden" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="md:hidden" to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="md:hidden" to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className="md:hidden" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
