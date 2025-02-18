import React, { useState } from "react";
import CategoryPick from "../compenents/home/CategoryPick";
import ProductCategory from "../compenents/home/ProductCategory";
import Slider from "../compenents/home/Slider";
import C2A from "../compenents/home/C2A";
import FeaturedPosts from "../compenents/home/FeaturedPosts";
import Hero from "../compenents/home/Hero";
import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Hero isMenuOpen={isMenuOpen} />

      <CategoryPick />
      <ProductCategory />
      <Slider />
      <C2A />
      <FeaturedPosts />
      <FooterShop />
    </div>
  );
};

export default Home;
