import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[1.5rem] justify-center items-center mt-[5rem]">
      <div className=" flex flex-col gap-[1.3rem] w-[15rem] md:flex-row md:w-[80%] md:justify-center md:gap-[4rem]">
        <div className="flex flex-col gap-[1.2rem] md:w-[20%]">
          <h3 className="h3">Get In Touch</h3>
          <p className="font-normal text-sm text-[#737373] leading-[1.25rem] tracking-[0.013rem]">
            the quick fox jumps over the lazy dog
          </p>
          <div className="flex flex-row gap-2 ">
            <FaTwitter className="text-[#33b5ff] text-2xl" />
            <FaFacebook className="text-[#33b5ff] text-2xl" />
            <FaInstagram className="text-[#33b5ff] text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-[1.2rem] md:w-[20%] ">
          <h3 className="h3">Company Info</h3>
          <div className="link flex flex-col gap-[1rem]">
            <Link>About Us</Link>
            <Link>Carrier</Link>
            <Link>We are hiring</Link>
            <Link>Blog</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[1.2rem] md:w-[20%] ">
          <h3 className="h3">Feateures</h3>
          <div className="link flex flex-col gap-[1rem]">
            <Link>Business Marketing</Link>
            <Link>User Analiytic</Link>
            <Link>Live Chat</Link>
            <Link>Unlimited Support</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[1.2rem] md:w-[20%]">
          <h3 className="h3">Resources</h3>
          <div className="link flex flex-col gap-[1rem]">
            <Link>IOS & Android</Link>
            <Link>Watch a Demo</Link>
            <Link>Customers</Link>
            <Link>API</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[15rem] my-[1.5rem] tracking-[0.013rem]">
        <h6 className="text-center font-bold text-sm text-[#737373]">
          Made With Love By Figmaland All Right Reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
