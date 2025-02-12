import React from "react";
import { homeCategoryPick } from "../../services/homedata";

const CategoryPick = () => {
  return (
    <div>
      <div>
        <h3 className="h3 text-center">EDITOR'S PICK</h3>
        <p className="p">Problems trying to resolve the conflict between</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <img src={homeCategoryPick[0]} alt="" />
          <button>MEN</button>
        </div>
        <div>
          <img src={homeCategoryPick[1]} alt="" />
          <button>WOMEN</button>
        </div>
        <div>
          <div>
            {" "}
            <img src={homeCategoryPick[2]} alt="" />
            <button>ACCESSORIES</button>
          </div>
          <div>
            {" "}
            <img src={homeCategoryPick[3]} alt="" />
            <button>KIDS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPick;
