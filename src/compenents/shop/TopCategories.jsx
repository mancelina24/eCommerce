import React, { useEffect } from "react"; // Removed useState
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/actions/productActions";

const TopCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories || []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const getGenderString = (gender) => {
    return gender === "k" ? "kadin" : "erkek";
  };

  if (!categories || categories.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Top Categories
        </h2>
        <p className="text-gray-600">No categories found.</p>
      </div>
    );
  }

  // Ensure categories is an array before trying to sort/slice
  const topCategories = Array.isArray(categories)
    ? categories
        .filter(
          (category) =>
            category && typeof category === "object" && "rating" in category
        )
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 5)
    : [];

  return (
    <div className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {" "}
        {/* Use container for responsiveness */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${getGenderString(
                category.gender
              )}/${category.title.toLowerCase()}/${category.id}`}
              className="group block"
            >
              {/* --- Image Container --- */}
              <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                {/* Use aspect-ratio utilities */}
                <img
                  src={category.img || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-[15rem] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/40" />

                {/* --- Content --- */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {category.title.toUpperCase()}
                  </h3>
                  <p className="text-white text-base md:text-lg mt-1">
                    {category.gender === "k" ? "Kadın" : "Erkek"}
                  </p>

                  {/* --- Rating --- */}
                  {category.rating != null && (
                    <div className="mt-2 md:mt-4 flex items-center bg-white/80 px-3 py-1 rounded-full">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className={`w-4 h-4 ${
                              index < Math.round(category.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-semibold text-gray-800">
                        {Number(category.rating).toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
