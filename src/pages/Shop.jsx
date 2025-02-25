import React from "react";
import HeaderShop from "../layout/HeaderShop";

import ShopHeroMenu from "../compenents/shop/ShopHeroMenu";
import TopCategories from "../compenents/categories/TopCategories"
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";

const Shop = () => {
  return (
    <div>
      <HeaderShop />
      <TopCategories />
      <ShopHeroMenu />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default Shop;
