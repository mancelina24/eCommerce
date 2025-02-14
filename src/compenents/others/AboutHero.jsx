import React from "react";
import { abouthero } from "../../services/othersdata";
const AboutHero = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-80 md:mt-0" : "mt-0"
      }`}
    >
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
        {/* Arka Plan Resmi */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${abouthero})` }}
        ></div>

        {/* İçerik Kutusu */}
        <div className="relative z-10 md:w-1/2 text-center md:text-left p-8 bg-white md:bg-transparent bg-opacity-80 rounded-lg md:rounded-none shadow md:shadow-none">
          <h3 className="text-sm font-bold text-gray-600 uppercase">
            About Company
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">ABOUT US</h2>
          <p className="text-gray-500 mt-4">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            Get Quote Now
          </button>
        </div>

        {/* Küçük Ekranlar İçin Resim */}
        <div className="md:hidden md:w-full flex justify-center mt-8">
          <img
            src={abouthero}
            alt="Shopping Girl"
            className="md:w-full md:max-w-xs md:object-cover md:object-right rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
