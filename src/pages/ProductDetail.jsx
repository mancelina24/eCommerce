import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";
import ShopLogo from "../compenents/shop/ShopLogo";
import ProductHead from "../compenents/productDetail/ProductDetailHead";
// import ProductDetailHero from "../compenents/productDetail/ProductDetailHero";
import ProductDetailDescription from "../compenents/productDetail/ProductDetailDescription";
import ProductDetailCards from "../compenents/productDetail/ProductDetailCards";

import { heroImage } from "../services/productDetailData"
import {
  ShoppingCart,
  Heart,
  Eye,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom"; 
import { clearProductDetail,fetchProductDetail } from "../store/actions/productActions"; 



const ProductDetail = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const product = useSelector((state) => state.product.selectedProduct)
  const fetchState = useSelector((state) => state.product.productFetchState)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [thumbnails, setThumbnails] = useState([heroImage[0], heroImage[1]])

  const [mainImageIndex, setMainImageIndex] = useState(0)


  useEffect(() => {
    dispatch(fetchProductDetail(productId))

    // Cleanup function - component unmount olduğunda product detayını temizle
    return () => {
      dispatch(clearProductDetail())
    }
  }, [dispatch, productId])

  useEffect(() => {
    setMainImageIndex(thumbnails[mainImageIndex])
  }, [mainImageIndex, thumbnails])

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex + 1) % thumbnails.length)
  }

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1))
  }

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const [isFavorited, setIsFavorited] = useState(false)

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  //Safely access properties
  const currentProduct = useSelector((state) => state.product.selectedProduct) || {}
  const images = currentProduct?.images || []
  const mainImage = images.length > 0 ? images[mainImageIndex]?.url : ""
  const rating = currentProduct?.rating || 0 // Default to 0 if null/undefined
  const stock = currentProduct?.stock || 0
  const price =
    currentProduct?.price !== null && currentProduct?.price !== undefined ? currentProduct.price.toFixed(2) : "N/A" // Handle null/undefined
  const description = currentProduct?.description || ""
  const name = currentProduct?.name || ""

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (fetchState === "FETCH_ERROR" || !currentProduct) {
    return <div className="text-red-500 text-center">Error loading product.</div>
  }


  return (
    <div>
      <HeaderShop setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <ProductHead isMenuOpen={isMenuOpen} />

      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-square">
 {/* ADD THIS LINE */}

 <img
  src={images[currentImageIndex]?.url || "/placeholder.svg"}
  alt="Main Product"
  className="w-full h-full object-cover rounded-lg"
/>
              {/* Arrows for image sliding (optional) */}

              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 flex space-x-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.url || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-20 object-cover rounded-md shadow-sm cursor-pointer hover:opacity-75"
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
            <button onClick={() => window.history.back()}>Geri</button>
            <div className="flex items-center gap-2">
              {[...Array(Math.floor(rating))].map((_, index) => (
               <Star
               key={index}
               className={`w-5 h-5 ${
                 index < Math.floor(rating)
                   ? "text-yellow-400 fill-current"
                   : index < rating
                     ? "text-yellow-400 fill-current opacity-50"
                     : "text-gray-300"
               }`}
             />
              ))}
              <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
            </div>
            <div className="flex flex-col items-center justify-start mb-6">
            <div className="text-3xl font-bold text-gray-900">
              ₺{product.price.toFixed(2)}
            </div>
            <div className={`px-4 py-2 rounded ${
              product.stock > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-800'
            }`}>
              {product.stock > 0 ? `${product.stock} adet stokta` : 'Stokta yok'}
            </div>
          </div>

            <p className="text-gray-600 leading-relaxed">{description}</p>

            {/* Color Options */}
            <div className="space-y-4">

              <div className="flex gap-3">
                {["#23A6F0", "#23856D", "#E77C40", "#252B42"].map((color, index) => (
                  <button
                    key={index}
                    className="w-5 h-5 rounded-full! focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-5">
              <button 
               disabled={product.stock === 0}
               onClick={handleAddToCart}
               className={`w-full px-8 py-3 bg-blue-500 text-white rounded-md! hover:bg-blue-600 transition-colors font-medium ${
                product.stock > 0 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              
              >
                {product.stock > 0 ? 'Sepete Ekle' : 'Stokta Yok'}
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-3 border rounded-full! hover:bg-gray-50 transition-colors"
                >
                  <Heart className={isFavorited ? "text-red-500 fill-current" : "text-gray-600"} size={20} />
                </button>
                <button className="p-3 border rounded-full! hover:bg-gray-50 transition-colors">
                  <ShoppingCart className="text-gray-600" size={20} />
                </button>
                <button className="p-3 border rounded-full! hover:bg-gray-50 transition-colors">
                  <Eye className="text-gray-600" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetailDescription />
      <ProductDetailCards />
      <ShopLogo />
      <FooterShop />
    </div>
  )
}

export default ProductDetail