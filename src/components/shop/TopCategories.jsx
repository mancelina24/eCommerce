import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from "../../store/actions/productActions";

const TopCategories = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  
  // Add console.log to debug Redux state
  const state = useSelector((state) => {
    console.log('Redux State:', state);
    return state;
  });
  
  const categories = state?.product?.categories || [];
  console.log('Categories:', categories);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchCategories());
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCategories();
  }, [dispatch]);

  const getGenderString = (gender) => {
    return gender === 'k' ? 'kadin' : 'erkek';
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-4 -mt-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Top Categories</h2>
        <div className="flex justify-center items-center h-40">
          <div className="text-gray-500">Loading categories...</div>
        </div>
      </div>
    );
  }

  // Ensure categories is an array before trying to sort/slice
  const topCategories = Array.isArray(categories) 
    ? categories
        .filter(category => category && typeof category === 'object' && 'rating' in category)
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 5)
    : [];

  console.log('Top Categories:', topCategories);

  return (
    <div className="container mx-auto px-4 py-4 -mt-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${getGenderString(category.gender)}/${category.title.toLowerCase()}/${category.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative pb-[100%]">
                {category.img && (
                  <img
                    src={category.img}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {category.title}
                </h3>
                {category.rating != null && (
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < Math.round(category.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
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
  );
};

export default TopCategories;
