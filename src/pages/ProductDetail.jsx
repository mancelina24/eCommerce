import React from "react";

const ProductDetail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default ProductDetail;
