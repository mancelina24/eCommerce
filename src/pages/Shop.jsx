import React, { useState } from "react";
import HeaderShop from "../layout/HeaderShop";
import Footer from "../layout/Footer";
import ShopHero from "../compenents/shop/ShopHero";
import ShopHeroMenu from "../compenents/shop/shopHeroMenu";
import ShopProducts from "../compenents/shop/ShopPorducts";

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ShopHero isMenuOpen={isMenuOpen} />
      <ShopHeroMenu />
      <ShopProducts />
      <Footer />
    </div>
  );
};

export default Shop;
