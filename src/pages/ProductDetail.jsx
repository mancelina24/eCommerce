import React from "react";
import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";
import ProductHead from "../compenents/productDetail/producthead";
const ProductDetail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ProductHead />
      <ShopLogo />
      <FooterShop />
    </div>
  );
};

export default ProductDetail;
