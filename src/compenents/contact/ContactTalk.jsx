import React from "react";
import { CornerRightDown } from "lucide-react";

const ContactTalk = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto text-center">
        <CornerRightDown className="mx-auto h-12 w-12 text-sky-500 mb-4 fill-none" />

        <h5 className=" h5 uppercase text-gray-500 mb-2">
          WE CAN'T WAIT TO MEET YOU
        </h5>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
          Let's Talk
        </h1>
        <button
          href="#"
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded"
        >
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default ContactTalk;
