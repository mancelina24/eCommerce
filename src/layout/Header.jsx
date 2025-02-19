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

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:w-full">
      <div className="hidden md:flex flex-row justify-between md:bg-[#252B42] md:text-white ">
        <div className="flex flex-row gap-4 md:my-5">
          <div className="flex flex-row md:ml-4 gap-1">
            <Phone />
            <h6 className="h6 sm:text-xs text-white ">(255 555-0118)</h6>
          </div>
          <div>
            <a
              className="h6 text-xs text-white hidden lg:flex gap-1 w-[17rem]"
              href="michelle.rivera@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
              (michelle.rivera@example.com)
            </a>
          </div>
        </div>
        <div>
          <h6 className="h6  text-white hidden items-center sm:block md:my-5  md:mr-10">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className="flex flex-row gap-2 md:mr-4 md:my-5">
          <h6 className="h6  text-white hidden lg:block">Follow Us :</h6>
          <div className="text-white text-[1.2rem] flex flex-row gap-2 cursor-pointer">
            <FaInstagram />
            <FiYoutube />
            <FiTwitter />
            <LiaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
