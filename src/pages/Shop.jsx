import React, { useState } from "react";
import HeaderShop from "../layout/HeaderShop";
import ShopHero from "../compenents/shop/ShopHero";
import ShopHeroMenu from "../compenents/shop/shopHeroMenu";
import ShopProducts from "../compenents/shop/ShopPorducts";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ShopHero isMenuOpen={isMenuOpen} />
      <ShopHeroMenu />
      <ShopProducts />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default Shop;
