import React, { useState } from "react";
import description1 from "../../assets/productDetail/description1.png";

const ProductDetailDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:space-x-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={description1} // Replace with your image path
              alt="Product Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                <button
                  onClick={() => handleTabClick(0)}
                  className={`${
                    activeTab === 0
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                  aria-current={activeTab === 0 ? "page" : undefined}
                >
                  Description
                </button>
                <button
                  onClick={() => handleTabClick(1)}
                  className={`${
                    activeTab === 1
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                  aria-current={activeTab === 1 ? "page" : undefined}
                >
                  Additional Information
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={`${
                    activeTab === 2
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                  aria-current={activeTab === 2 ? "page" : undefined}
                >
                  Reviews (0)
                </button>
              </nav>
            </div>

            {/* Tab Panels */}
            <div className="p-4">
              {activeTab === 0 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    The quick fox jumps over
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Additional Information
                  </h3>
                  <ul>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Reviews (0)
                  </h3>
                  <ul>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="text-gray-700 mt-2">
                      {" "}
                      The quick fox jumps over the lazy dog
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
