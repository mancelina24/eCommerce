import React from "react";

const PricingFAQ = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Problems trying to resolve the conflict between the two major realms{" "}
          <br />
          of Classical physics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white shadow-md rounded-lg"
          >
            <span className="text-blue-500 text-xl">&gt;</span>
            <div>
              <h3 className="font-bold text-gray-800">
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-8 text-center text-gray-600">
        Haven't got your answer?
        <h4 className="text-center text-gray-600">Contact our support</h4>
      </h4>
    </div>
  );
};

export default PricingFAQ;
