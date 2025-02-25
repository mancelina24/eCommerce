import React, { useState } from "react";
import HeaderShop from "../layout/HeaderShop";
import ShopHero from "../components/shop/ShopHero";
import ShopHeroMenu from "../components/shop/ShopHeroMenu";
import ShopProducts from "../components/shop/ShopProducts";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../components/shop/ShopLogo";
import Categories from "../components/categories/Categories";

const Shop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ShopHero isMenuOpen={isMenuOpen} />
      <ShopHeroMenu />
      <Categories />
      <ShopProducts />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default Shop;
