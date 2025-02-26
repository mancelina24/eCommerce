import React from "react";
import HeaderShop from "../layout/HeaderShop";

import ShopHeroMenu from "../compenents/shop/ShopHeroMenu";
import TopCategories from "../compenents/shop/TopCategories";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";
import AllProducts from "../compenents/shop/AllProducts";

const Shop = () => {
  return (
    <div>
      <HeaderShop />
      <TopCategories />
      <AllProducts />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default Shop;
