import React from "react";

const TeamHead = ({ isMenuOpen }) => {
  return (
    <div
      className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
        isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
      }`}
    >
      <div className="flex flex-col justify-center items-center my-5 gap-10">
        <div className="py-5">
          <h5 className="h5 text-[#737373] text-center pb-5">WHAT WE DO</h5>
          <h1 className="h1 text-black text-center">
            Innovation tailored for you
          </h1>
        </div>
        <nav className="flex items-center text-gray-500 text-sm">
          <a
            href="/"
            className="text-gray-900 font-semibold hover:text-blue-600"
          >
            Home
          </a>
          <span className="mx-2">&gt;</span>
          <a href="/shop" className="hover:text-blue-600">
            Team
          </a>
        </nav>
      </div>
    </div>
  );
};

export default TeamHead;
