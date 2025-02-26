import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import HeaderShop from "../layout/HeaderShop";

import TopCategories from "../compenents/shop/TopCategories";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";
import AllProducts from "../compenents/shop/AllProducts";



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
