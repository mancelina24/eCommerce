import React from "react";
import { testimonials } from "../../services/othersdata";

const AboutTestimonials = () => {
  return (
    <div className="bg-[#2a7cc7] text-white flex flex-col md:flex-row items-center justify-center md:ml-[15rem] w-[90rem] h-[40rem] my-10">
      {/* Metin Alanı */}
      <div className="max-w-lg text-center  md:text-left md:ml-70 ">
        <p className="text-sm font-semibold uppercase">Work With Us</p>
        <h2 className="h2 mt-2">Now Let’s grow Yours</h2>
        <p className="p text-start mt-4 text-gray-200">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th.
        </p>
        <button className="mt-6 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition">
          Button
        </button>
      </div>

      {/* Resim Alanı (Desktop için) */}
      <div className="hidden md:flex md:w-[50rem] md:h-[40rem] justify-end">
        <img
          src={testimonials}
          alt="Work With Us"
          className="h-[40rem] w-[50rem]"
        />
      </div>
    </div>
  );
};

export default AboutTestimonials;
