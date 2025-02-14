import React, { useState } from "react";
import FooterShop from "../layout/FooterShop";
import HeaderOthers from "../layout/HeaderOthers";
import AboutLogo from "../compenents/others/AboutLogo";
import AboutCounter from "../compenents/others/AboutCounter";
import AboutProblems from "../compenents/others/AboutProblems";
import AboutMembers from "../compenents/others/AboutMembers";
import AboutTestimonials from "../compenents/others/AboutTestimonials";
import AboutVideo from "../compenents/others/AboutVideo";
import AboutHero from "../compenents/others/AboutHero";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderOthers setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <AboutHero isMenuOpen={isMenuOpen} />
      <AboutProblems />
      <AboutCounter />
      <AboutVideo />
      <AboutMembers />
      <AboutLogo />
      <AboutTestimonials />
      <FooterShop />
    </div>
  );
};

export default About;
