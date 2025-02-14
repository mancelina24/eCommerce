import React from "react";
import { counter } from "../../services/shopdata";

const AboutCounter = () => {
  return (
    <div className="flex justify-center items-center gap-16 py-12 bg-white">
      {counter.map((stat, index) => (
        <div key={index} className="text-center">
          <h1 className="h1 text-6xl text-black py-3">{stat.value}</h1>
          <p className="p ">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCounter;
