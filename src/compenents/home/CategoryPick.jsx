import React from "react";
import { homeCategoryPick } from "../../services/homedata";

const CategoryPick = () => {
  return (
    <div className="my-10 mx-10 ">
      <div className="flex justify-center flex-col items-center my-10">
        <h3 className="h3 text-center my-5">EDITOR'S PICK</h3>
        <p className="p w-[12rem] ">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10">
        <div className="relative">
          <img src={homeCategoryPick[1]} alt="" />
          <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold w-[10.5rem] py-2 px-4 ">
            MEN
          </button>
        </div>
        <div className="relative top-0">
          <img src={homeCategoryPick[0]} alt="" />
          <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold w-[10.5rem] py-2 px-4 ">
            WOMEN
          </button>
        </div>
        <div>
          <div className="w-[21rem] h-[14.2rem] relative top-10 md:top-0">
            <img
              src={homeCategoryPick[2]}
              className="object-cover w-full h-full"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold w-[10.5rem] py-2 px-4 ">
              ACCESSORIES
            </button>
          </div>
          <div className="w-[21rem] h-[14.2rem] relative top-15 md:top-2">
            <img
              src={homeCategoryPick[3]}
              className="object-cover w-full h-full"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold w-[10.5rem] py-2 px-4 ">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPick;
