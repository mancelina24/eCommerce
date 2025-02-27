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

  const [isFavorited, setIsFavorited] = useState(false)

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
          <div>
            <div className="relative">
              {mainImage && (
                <img
                  src={mainImage || "/placeholder.svg"}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg shadow-md aspect-video"
                />
              )}
              {/* Arrows for image sliding (optional) */}

              <button className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full">
                <ChevronLeft className="w-6 h-6 fill-none" onClick={handlePrevImage}></ChevronLeft>
              </button>
              <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full">
                <ChevronLeft className="w-6 h-6 fill-none" onClick={handleNextImage}></ChevronLeft>
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
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
            <button onClick={() => window.history.back()}>Geri</button>
            <div className="flex items-center mt-2">
              {[...Array(Math.floor(rating))].map((_, index) => (
                <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              {rating % 1 !== 0 && (
                <Star className="w-4 h-4 text-yellow-400 fill-current" style={{ clipPath: "inset(0 50% 0 0)" }} />
              )}
              {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                <Star key={index + Math.floor(rating)} className="w-4 h-4 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">{rating}</span>
            </div>

            <p className="mt-4 text-3xl font-bold text-gray-900">{price}</p>
            <p className="text-green-500 mt-1">Availability : {stock}</p>

            <p className="mt-6 text-gray-700">{description}</p>

            {/* Color Options */}
            <div className="mt-6 flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 cursor-pointer"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start items-center mt-4 text-gray-600 space-x-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Select Options
              </button>
              <button className="rounded-full border border-gray-300 hover:bg-gray-100 p-2">
                <Heart
                  className={`cursor-pointer ${isFavorited ? "fill-red-500 text-red-500" : "hover:text-red-500"}`}
                  fill={isFavorited ? "currentColor" : "none"}
                  onClick={() => setIsFavorited(!isFavorited)}
                />
              </button>
              <button className="rounded-full border border-gray-300 hover:bg-gray-100 p-2">
                <ShoppingCart className="cursor-pointer hover:text-green-500" />
              </button>
              <button className="rounded-full border border-gray-300 hover:bg-gray-100 p-2">
                <Eye className="cursor-pointer hover:text-blue-500" />
              </button>
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