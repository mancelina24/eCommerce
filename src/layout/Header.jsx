import { Mail, Phone } from "lucide-react";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="hidden">
        <div>
          <div>
            <Phone />
            <p>(255 555-0118)</p>
          </div>
          <div>
            <Mail />
            <p>(michelle.rivera@example.com)</p>
          </div>
        </div>
        <div>Follow Us and get a chance to win 80% off</div>
        <div>
          <p>Follow Us :</p>
          <FaInstagram />
          <FiYoutube />
          <FiTwitter />
          <LiaFacebook />
        </div>
      </div>
      <div>
        <p>Bandage</p>
        <div>
          <IoPersonOutline />
          <RxHamburgerMenu />
          <IoIosSearch />
          <SlBasket />
        </div>
      </div>
    </div>
  );
};

export default Header;
