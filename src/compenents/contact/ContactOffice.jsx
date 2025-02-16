import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactOffice = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-4">
      <h6 className="h6  text-gray-500 uppercase">Visit Our Office</h6>
      <h2 className="h2 font-bold text-gray-900 mt-2">
        We help small businesses <br /> with big ideas
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105">
          <div className="text-blue-500 text-4xl">
            <Phone className="w-10 h-10" />
          </div>
          <h6 className="text-gray-600 font-bold mt-3">
            georgia.young@example.com
          </h6>
          <h6 className="text-gray-600 font-bold">georgia.young@ple.com</h6>
          <h6 className="h6 font-bold mt-3">Get Support</h6>
          <button className=" h6 font-bold mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Submit Request
          </button>
        </div>

        {/* Card 2 - Center */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105">
          <div className="text-blue-400 text-4xl">
            {" "}
            <MapPin className="w-10 h-10" />
          </div>
          <h6 className="h6 text-white font-bold mt-3">
            georgia.young@example.com
          </h6>
          <h6 className="h6 text-white font-bold">georgia.young@ple.com</h6>
          <h6 className="h6 text-white font-bold mt-3">Get Support</h6>
          <button className="h6 font-bold mt-4 px-6 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105">
          <div className="text-blue-500 text-4xl">
            <Mail className="w-10 h-10" />
          </div>
          <h6 className="h6 text-gray-600 mt-3 font-bold ">
            georgia.young@example.com
          </h6>
          <h6 className="h6 text-gray-600 font-bold ">georgia.young@ple.com</h6>
          <h6 className="h6 font-bold  mt-3">Get Support</h6>
          <button className="h6 font-bold mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactOffice;
