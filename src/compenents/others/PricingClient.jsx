import React from "react";

const PricingClient = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto text-center max-w-lg">
        <h2 className="h2 mb-4 text-black">Pricing</h2>
        <p className="p mb-8 h-15">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center mb-8">
          <h5 className="h5 text-black font-bold mr-2">Monthly</h5>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <h5 className="h5 text-black ml-2">Yearly</h5>
          <button className="bg-[#b2e3ff] font-bold text-[#23a6f0] px-3 py-1 rounded-full ml-4">
            Save 25%
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full max-w-4xl">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-blue-300 transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800">FREE</h3>
          <p className="text-gray-500">Organize across all apps by hand</p>
          <p className="text-3xl font-bold text-blue-500 mt-4">0$</p>
          <p className="text-gray-500">Per Month</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              1GB Cloud storage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white">
                ✘
              </span>{" "}
              Email and community support
            </li>
          </ul>
          <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md">
            Try for free
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-500 text-white transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-bold">STANDARD</h3>
          <p>Organize across all apps by hand</p>
          <p className="text-3xl font-bold text-blue-400 mt-4">9.99$</p>
          <p>Per Month</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white">
                ✘
              </span>{" "}
              1GB Cloud storage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white">
                ✘
              </span>{" "}
              Email and community support
            </li>
          </ul>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">
            Try for free
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-blue-300 transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800">PREMIUM</h3>
          <p className="text-gray-500">Organize across all apps by hand</p>
          <p className="text-3xl font-bold text-blue-500 mt-4">19.99$</p>
          <p className="text-gray-500">Per Month</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                ✔
              </span>{" "}
              Unlimited product updates
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white">
                ✘
              </span>{" "}
              1GB Cloud storage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white">
                ✘
              </span>{" "}
              Email and community support
            </li>
          </ul>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingClient;
