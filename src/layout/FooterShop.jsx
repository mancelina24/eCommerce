import React from "react";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const FooterShop = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-semibold text-gray-800">Bandage</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 25"
              >
                <LiaFacebook />
              </svg>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <FaInstagram />
              </svg>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <FiTwitter />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Content - Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4 ml-6">
              Company Info
            </h4>
            <ul className="text-gray-500">
              <li className="mb-2 ">
                <a href="#" className="link hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  Carrier
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" link hover:text-blue-500">
                  We are hiring
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Legal */}
          <div className="">
            <h4 className="font-semibold text-gray-700 text-sm mb-4 ml-6">
              Legal
            </h4>
            <ul className="text-gray-500">
              <li className="mb-2 flex justify-start items">
                <a href="#" className="link hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" link hover:text-blue-500">
                  Carrier
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  We are hiring
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Features */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4 ml-6">Features</h4>
            <ul className="text-gray-500">
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  Business Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  User Analytic
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  Live Chat
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-blue-500">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4 ml-6">Resources</h4>
            <ul className="text-gray-500 ">
              <li className="mb-2 ">
                <a href="#" className="link hover:text-[#23a6f0] ">
                  IOS & Android
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-[#23a6f0]">
                  Watch a Demo
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-[#23a6f0]">
                  Customers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link hover:text-[#23a6f0]">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Get In Touch */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Get In Touch</h4>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="w-full bg-[#23a6f0] text-white py-2 rounded mt-2 hover:bg-blue-600 focus:outline-none">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 text-center text-gray-500">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterShop;
