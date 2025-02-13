import React from "react";
import { c2a } from "../../services/homedata";

const C2A = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
      <div className="hidden flex-col-reverse md:h-[35rem] md:w-[44rem] md:flex md:flex-col">
        <img src={c2a[0]}></img>
      </div>
      <div className="my-5 w-[20rem] md:w-[25rem]">
        <h5 className="h5 text-[#bdbdbd] text-center my-10">SUMMER 2020</h5>
        <h2 className="h2 text-[#252b42] text-center my-10">
          Part of the Neural Universe
        </h2>
        <h4 className="h4 text-[#737373] text-center my-10">
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="flex flex-col justify-center items-center md:flex-row gap-5 my-10">
          <button className="btnhome bg-[#23a6f0] md:bg-[#2dc071] text-white w-[14rem] h-[4rem]">
            BUY NOW
          </button>
          <button className="btnhome bg-white  text-[#23a6f0] md:text-[#2dc071] w-[14rem] h-[4rem] border md:border-[#2dc071] border-[#23a6f0]">
            READ MORE
          </button>
        </div>
      </div>
      <div className="flex flex-col md:hidden mb-15">
        <img src={c2a[0]} className="h-auto w-[25rem]"></img>
      </div>
    </div>
  );
};

export default C2A;
