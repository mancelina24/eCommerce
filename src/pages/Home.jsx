import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CategoryPick from "../compenents/home/CategoryPick";
import ProductCategory from "../compenents/home/ProductCategory";
import Slider from "../compenents/home/Slider";
import C2A from "../compenents/home/C2A";
import FeaturedPosts from "../compenents/home/FeaturedPosts";
import Hero from "../compenents/home/Hero";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Hero isMenuOpen={isMenuOpen} />
      <CategoryPick />
      <ProductCategory />
      <Slider />
      <C2A />
      <FeaturedPosts />
      <Footer />
    </div>
  );
};

export default Home;
