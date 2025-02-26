import React from "react";
import HeaderShop from "../layout/HeaderShop";

import TopCategories from "../compenents/shop/TopCategories";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";
import AllProducts from "../compenents/shop/AllProducts";
import ShopProducts from "../compenents/shop/ShopPorducts";

const Shop = () => {
  return (
    <div>
      <HeaderShop />
      <TopCategories />
      <ShopProducts />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default Shop;
