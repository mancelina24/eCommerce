import React from "react";
import { shopLogo } from "../../services/shopdata";
const ShopLogo = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center md:flex-row bg-[#FAFAFA] py-10">
      {shopLogo.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-35 h-auto transition-all duration-300 hover:opacity-80 hover:shadow-lg"
          />
        </a>
      ))}
    </div>
  );
};

export default ShopLogo;
