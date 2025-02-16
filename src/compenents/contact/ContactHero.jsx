import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { contactimage2 } from "../../services/othersdata";

const ContactHero = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
      }`}
    >
      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <h5 className="h5 uppercase text-sm text-gray-500 mb-5">
              Contact Us
            </h5>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Get in touch today!
            </h1>
            <h4 className="h4 text-gray-500 mb-6">
              We know how large objects will act, but things on a small scale
            </h4>
            <h3 className="text-gray-700">
              <strong>Phone: +451 215 215</strong>
            </h3>
            <h3 className="text-gray-700">
              <strong>Fax: +451 215 215 </strong>
            </h3>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-4 text-[#23a6f0] text-xl">
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Overlapping Circles (Optional) */}
            <div className="absolute top-[40%] right-[1%] md:top-1/4 md:right-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-pink-100 rounded-full w-50 h-50 z-0"></div>
            <div className="absolute top-1/8 right-7/8 transform translate-x-1/2 -translate-y-1/2 bg-pink-100 rounded-full w-12 h-12 z-0"></div>
            <div className="absolute top-2/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-pink-100 rounded-full w-12 h-12 z-0"></div>
            <div className="absolute top-1/5 right-45 transform translate-x-1/2 -translate-y-1/2 bg-purple-100 rounded-full w-5 h-5 z-0"></div>
            <img
              src={contactimage2[0]}
              alt="Family Shopping"
              className="w-full h-full object-cover  relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
