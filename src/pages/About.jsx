import React, { useState } from "react";
import FooterShop from "../layout/FooterShop";
import HeaderOthers from "../layout/HeaderOthers";
import AboutLogo from "../compenents/others/AboutLogo";
import AboutCounter from "../compenents/others/AboutCounter";
import AboutProblems from "../compenents/others/AboutProblems";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <HeaderOthers setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <AboutProblems />
      <AboutCounter />
      <AboutLogo />
      <FooterShop />
    </div>
  );
};

export default About;
