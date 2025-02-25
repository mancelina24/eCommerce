import React, { useState } from "react";
import HeaderShop from "../layout/HeaderShop";

import ShopHeroMenu from "../compenents/shop/ShopHeroMenu";
import TopCategories from "../compenents/categories/TopCategories"
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <TopCategories isMenuOpen={isMenuOpen} />
      <ShopHeroMenu />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default Shop;
