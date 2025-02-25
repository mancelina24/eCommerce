import React from 'react';

const ShopHero = ({ isMenuOpen }) => {
  return (
    <div className={`shop-hero ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Add your hero section content here */}
    </div>
  );
};

export default ShopHero;
