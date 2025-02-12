import React, { useState } from "react";
import Hero from "../compenents/home/hero";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CategoryPick from "../compenents/home/CategoryPick";
import ProductCategory from "../compenents/home/ProductCategory";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Hero isMenuOpen={isMenuOpen} />
      <CategoryPick />
      <ProductCategory />
      <Footer />
    </div>
  );
};

export default Home;
