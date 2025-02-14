import React from "react";

const AboutProblems = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-15 md:gap-25 my-20 items-center py-12 bg-white px-16">
      <div className="max-w-lg">
        <p className="p text-red-500 font-bold text-center md:text-start">
          Problems trying
        </p>
        <h3 className="h3 mt-4 md:mt-2 md:w-110">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h3>
      </div>
      <div className="p max-w-md text-start font-bold">
        <p>
          {" "}
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  );
};

export default AboutProblems;
