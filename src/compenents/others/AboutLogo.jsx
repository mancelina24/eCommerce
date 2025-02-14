import React from "react";
import { shopLogo } from "../../services/shopdata";
const AboutLogo = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] py-5">
      <div className="my-5 px-5 justify-center items-center">
        <h2 className="h2 text-black text-center my-5">
          Big Companies Are Here
        </h2>
        <div className="flex justify-center items-center">
          <p className="p flex  w-[30rem] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center md:flex-row bg-[#FAFAFA] py-10 hover:scale-105">
        {shopLogo.map((item) => (
          <div key={item}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutLogo;
