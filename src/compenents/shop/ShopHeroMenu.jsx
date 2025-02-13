import React from "react";

const ShopHeroMenu = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-around bg-white py-2 px-4 ">
      <div className="text-gray-400">Showing all 12 results</div>

      <div className="flex items-center flex-row gap-5">
        <div className="text-gray-400 mr-2">Views:</div>
        <div className="flex flex-row">
          <button className="border border-gray-600 rounded p-2 focus:outline-none hover:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm14 1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h12zM3 13a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4zm14 1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="border border-gray-600 rounded p-2 ml-1 focus:outline-none hover:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row w-80">
        <div className="ml-4">
          <select className="bg-white border border-gray-300 rounded px-4 py-2 appearance-none focus:outline-none focus:border-blue-500">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <button className="bg-sky-400 text-white font-semibold rounded px-4 py-2 ml-4 hover:bg-sky-500 focus:outline-none">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopHeroMenu;
