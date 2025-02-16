import React, { useState } from "react";
import AboutMembers from "../compenents/others/AboutMembers";
import HeaderShop from "../layout/HeaderShop";
import TeamHead from "../compenents/team/TeamHead";
import FooterShop from "../layout/FooterShop";
import TeamCTA from "../compenents/team/TeamCTA";
import TeamHero from "../compenents/team/TeamHero";

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <TeamHead isMenuOpen={isMenuOpen} />
      <TeamHero />
      <AboutMembers isMenuOpen={isMenuOpen} />
      <TeamCTA />
      <FooterShop />
    </div>
  );
};

export default Team;
