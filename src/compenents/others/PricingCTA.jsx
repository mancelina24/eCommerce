import React from "react";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const PricingCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 my-30 bg-white ">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Start your 14 days free trial
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <button className="bg-[#23a6f0] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 transition">
        Try it free now
      </button>

      <div className="flex gap-4 mt-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-2xl "
        >
          <FiTwitter className="fill-[#23a6f0] text-[#23a6f0] " />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-2xl "
        >
          <LiaFacebook className="fill-[#23a6f0]" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-2xl "
        >
          <FaInstagram className="fill-[#23a6f0]" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center  text-2xl "
        >
          <FaLinkedin className="fill-[#23a6f0]" />
        </a>
      </div>
    </div>
  );
};

export default PricingCTA;
