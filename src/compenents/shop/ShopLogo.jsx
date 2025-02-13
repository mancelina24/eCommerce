import React from "react";
import { shopLogo } from "../../services/shopdata";
const ShopLogo = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center md:flex-row bg-[#FAFAFA]">
      {shopLogo.map((item, i) => (
        <div key={i}>
          <img src={item} alt="." className="w-35 h-auto" />
        </div>
      ))}
    </div>
  );
};

export default ShopLogo;
