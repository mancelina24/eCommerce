<div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
          <div className="relative aspect-square">
           {mainImage && (
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            {/* Arrows for image sliding (optional) */}

            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
              <ChevronLeft
                className="w-6 h-6"
                onClick={handlePrevImage}
              ></ChevronLeft>
            </button>
            <button  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
              <ChevronLeft
                className="w-6 h-6"
              />
            </button>
          </div>
          </div>
          {/* Thumbnail Images */}
         <div className="mt-4 flex space-x-4">
            {images.map((image, index) => (
               <button
               key={index}
               onClick={() => setCurrentImageIndex(index)}
               className={`flex-shrink-0 w-24 aspect-square rounded-md overflow-hidden border-2 transition-all ${
                 currentImageIndex === index ? "border-blue-500" : "border-transparent"
               }`}
             >
              <img
                key={index}
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onClick={() => handleThumbnailClick(index)}
              />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            {name}
          </h1>
          <div className="flex items-center gap-2">
          <div className="flex">
          {[...Array(Math.floor(rating))].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            {rating % 1 !== 0 && (
              <Star className="w-5 h-5 text-yellow-400 fill-current" style={{clipPath: "inset(0 50% 0 0)"}}/>
            )}
            {[...Array(5 - Math.ceil(rating))].map((_, index) => (
              <Star key={index + Math.floor(rating)} className="w-4 h-4 text-yellow-400" />
            ))}
          
            <span className="ml-2 text-gray-600">{rating}</span>
        
          </div>
          <div className="space-y-2">
          <p className="text-3xl font-bold text-gray-900">{price}</p>
          <p className="text-sm">
                Availability: <span className="text-blue-500 font-medium">{availability}</span>
              </p>

         
          </div>
          <p className="text-gray-600 leading-relaxed">
           { description}
          </p>
          <div className="space-y-4">
              <p className="font-medium">Select Color</p>
              <div className="flex gap-3">
              {["#23A6F0", "#23856D", "#E77C40", "#252B42"].map((color, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
          </div>
          </div>
          <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
                Select Options
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-3 border rounded-full hover:bg-gray-50 transition-colors"
                >
                  <Heart className={isFavorited ? "text-red-500 fill-current" : "text-gray-600"} size={20} />
                </button>
                <button className="p-3 border rounded-full hover:bg-gray-50 transition-colors">
                  <ShoppingCart className="text-gray-600" size={20} />
                </button>
                <button className="p-3 border rounded-full hover:bg-gray-50 transition-colors">
                  <Eye className="text-gray-600" size={20} />
                </button>
              </div>
           </div>
          </div>
        </div>
      </div>
      </div>
     