import React, { useState } from "react";
import FooterShop from "../layout/FooterShop";
import PricingHero from "../compenents/others/PricingHero";
import PricingLogo from "../compenents/others/PricingLogo";
import PricingClient from "../compenents/others/PricingClient";
import PricingFAQ from "../compenents/others/PricingFAQ";
import PricingCTA from "../compenents/others/PricingCTA";
import HeaderShop from "../layout/HeaderShop";

const Pricing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
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
