import { Mail, Phone } from "lucide-react";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import React from "react";
import NavLinkMenu from "./NavLinkMenu";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div>
      <div className="hidden md:flex flex-row justify-around">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row">
            <Phone />
            <p>(255 555-0118)</p>
          </div>
          <div className="flex flex-row">
            <Mail />
            <p>(michelle.rivera@example.com)</p>
          </div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div className="flex flex-row gap-2">
          <p>Follow Us :</p>
          <FaInstagram />
          <FiYoutube />
          <FiTwitter />
          <LiaFacebook />
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <h3>Bandage</h3>
        <NavLinkMenu />
        <div className="flex flex-row gap-2">
          <IoPersonOutline className="cursor-pointer" />
          <p className="hidden md:flex md:text-2xl ">Login/Register</p>
          <IoIosSearch />
          <SlBasket />
          <Hamburger />
          <FaRegHeart className="hidden md:flex md:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
