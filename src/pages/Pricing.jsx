import React, { useState } from "react";
import FooterShop from "../layout/FooterShop";
import HeaderOthers from "../layout/HeaderOthers";
import PricingHero from "../compenents/others/PricingHero";
import PricingLogo from "../compenents/others/PricingLogo";
import PricingClient from "../compenents/others/PricingClient";
import PricingFAQ from "../compenents/others/PricingFAQ";
import PricingCTA from "../compenents/others/PricingCTA";

const Pricing = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div>
      <HeaderOthers setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <PricingHero isMenuOpen={isMenuOpen} />
      <PricingClient />
      <PricingLogo />
      <PricingFAQ />
      <PricingCTA />
      <FooterShop />
    </div>
  );
};

export default Pricing;
