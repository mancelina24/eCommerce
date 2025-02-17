import React from "react";
import { abouthero } from "../../services/othersdata";
const AboutHero = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
      }`}
    >
      <section className="relative h-[50rem] md:w-[80rem] md:h-[45rem] flex flex-col md:flex-row items-center justify-center bg-white">
        {/* Arka Plan Resmi */}

        {/* İçerik Kutusu */}
        <div className="md:absolute md:top-80 z-10 md:w-[30rem] text-center md:text-left p-8 bg-white md:bg-transparent bg-opacity-80 rounded-lg md:rounded-none  md:right-200">
          <h3 className="text-sm font-bold text-gray-600 uppercase">
            About Company
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">ABOUT US</h2>
          <p className="text-gray-500 mt-4 md:w-[24rem]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Get Quote Now
          </button>
        </div>

        {/* Küçük Ekranlar İçin Resim */}
        <div className="md:w-[45rem] md:absolute z-5 md:left-160 mt-20">
          <img
            src={abouthero}
            alt="Work With Us"
            className="h-full w-[50rem]"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
