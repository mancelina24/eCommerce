import React from "react";
import { contactimage } from "../services/othersdata";

const ContactExtra = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-right md:bg-center"
      style={{ backgroundImage: `url(${contactimage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-20">
        <h2 className="absolute top-50 md:top-80 text-3xl md:text-5xl font-bold">
          Questions & Answers
        </h2>
        <p className="absolute top-60 p md:top-90 my-10 text-lg md:text-xl max-w-2xl">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
        <a
          href="#contact"
          className="absolute top-90 mt-6 md:top-120 px-6 py-3 font-bold text-[#23a6f0] text-lg  "
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default ContactExtra;
