import React, { useState } from "react";
import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";
import ProductHead from "../compenents/productDetail/ProductDetailHead";
import ProductDetailHero from "../compenents/productDetail/ProductDetailHero";
import ProductDetailDescription from "../compenents/productDetail/ProductDetailDescription";
import ProductDetailCards from "../compenents/productDetail/ProductDetailCards";

const ProductDetail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ProductHead isMenuOpen={isMenuOpen} />
      <ProductDetailHero />
      <ProductDetailDescription />
      <ProductDetailCards />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default ProductDetail;
