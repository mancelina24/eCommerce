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
      <div className="flex flex-row justify-between my-[1.6rem] ml-[2.4rem] mr-[2.4rem] gap-[1.5rem] ">
        <h3 className="h3">Bandage</h3>
        <NavLinkMenu />
        <div className="md:linkHeader flex flex-row gap-[1.2rem] ">
          <IoPersonOutline />
          <p className="hidden md:flex ">Login/Register</p>
          <IoIosSearch />
          <SlBasket className="md:ml-2.5" />
          <Hamburger />
          <FaRegHeart className="hidden md:flex md:cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Header;
