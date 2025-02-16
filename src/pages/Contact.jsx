import React, { useState } from "react";
import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";
import ContactHero from "../compenents/contact/ContactHero";
import ContactOffice from "../compenents/contact/ContactOffice";
import ContactTalk from "../compenents/contact/ContactTalk";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ContactHero isMenuOpen={isMenuOpen} />
      <ContactOffice />
      <ContactTalk />
      <FooterShop />
    </div>
  );
};

export default Contact;
