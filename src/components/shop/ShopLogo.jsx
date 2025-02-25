import React from "react";
import { shopLogo } from "../../services/shopdata";

const ShopLogo = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center md:flex-row bg-[#FAFAFA] py-10 hover:scale-105">
      {shopLogo.map((item, index) => (
        <div key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-32 h-auto transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShopLogo;