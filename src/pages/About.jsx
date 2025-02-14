import React, { useState } from "react";
import FooterShop from "../layout/FooterShop";
import HeaderOthers from "../layout/HeaderOthers";
import AboutLogo from "../compenents/others/AboutLogo";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <HeaderOthers setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <AboutLogo />
      <FooterShop />
    </div>
  );
};

export default About;
