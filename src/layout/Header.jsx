import { Mail, Phone } from "lucide-react";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

import NavLinkMenu from "../compenents/general/NavLinkMenu";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:w-full">
      <div className="hidden md:flex flex-row justify-between md:bg-[#252B42] md:text-white ">
        <div className="flex flex-row gap-4 md:my-5">
          <div className="flex flex-row md:ml-4">
            <Phone />
            <h6 className="h6 text-white">(255 555-0118)</h6>
          </div>
          <div className="flex flex-row">
            <Mail />
            <h6 className="h6 text-white">(michelle.rivera@example.com)</h6>
          </div>
        </div>
        <div>
          <h6 className="h6 text-white md:my-5 md:mr-45">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="flex flex-row gap-2 md:mr-4 md:my-5">
          <h6 className="h6 text-white">Follow Us :</h6>
          <div className="text-white text-[1.2rem] flex flex-row gap-2 cursor-pointer">
            <FaInstagram />
            <FiYoutube />
            <FiTwitter />
            <LiaFacebook />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-row relative justify-between my-[1.6rem] ml-[2.4rem] mr-[2.4rem] gap-[1.5rem] `}
      >
        <h3 className="h3">Bandage</h3>
        <NavLinkMenu />
        <div className="md:linkHeader flex flex-row gap-[1.2rem] ml-8">
          <IoPersonOutline />
          <p className="hidden md:flex ">Login/Register</p>
          <IoIosSearch />
          <SlBasket className="md:ml-2.5" />
          <div className="w-8">
            <button onClick={toggleMenu} className="text-xl md:hidden">
              {isMenuOpen ? (
                <FaTimes className="text-black" />
              ) : (
                <FaBars className="text-black" />
              )}
            </button>
            <div
              className={`md:hidden relative top-0 right-45 z-50 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } mt-15 flex-col  `}
              >
                <li>
                  <NavLink className=" mobilemenu my-5 md:hidden" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" mobilemenu md:hidden" to="/product">
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobilemenu md:hidden" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobilemenu md:hidden" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <FaRegHeart className="hidden md:flex md:cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Header;
