import { Mail, Phone } from "lucide-react";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

import NavLinkMenu from "../compenents/general/NavLinkMenu";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderOthers = ({ setIsMenuOpen, isMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:w-full bg-[#f6f6f6] md:bg-white justify-center items-center">
      <div
        className={`flex flex-row md:w-[55rem] relative md:left-60 2xl:left-210 justify-center mx-2 my-[1.6rem] gap-[1.5rem]`}
      >
        <div className="flex flex-row  gap-30 mr-65 md:mr-80">
          <h3 className="h3">Bandage</h3>
          <NavLinkMenu />
        </div>
        <div className="absolute right-30 md md:linkHeader md:w-[22rem] flex flex-row gap-1 ">
          <p className="hidden md:flex md:w-[2rem] h-[1.5rem] md:mr-10 md:mt-1.5">
            Login
          </p>
          <button className="hidden md:flex btnhome text-white text-xs md:bg-[#23a6f0] w-[10rem] h-[2rem] ">
            Become a member
          </button>
          <IoIosSearch className="w-[1.5rem] h-[1.5rem] md:hidden" />
          <SlBasket className="md:ml-2.5 w-[1.5rem] h-[1.5rem] md:hidden" />
          <div className="w-8">
            <button onClick={toggleMenu} className="text-xl md:hidden">
              {isMenuOpen ? (
                <FaTimes className="text-black w-[1.5rem] h-[1.5rem]" />
              ) : (
                <FaBars className="text-black w-[1.5rem] h-[1.5rem]" />
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
                } mt-15 flex-col flex justify-center items-center gap-5`}
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
        </div>
      </div>
    </div>
  );
};

export default HeaderOthers;
