import React from "react";
import { NavLink } from "react-router-dom";
import { featuredPosts } from "../../services/homedata";
import { FaClock, FaChevronRight } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const FeaturedPosts = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-15 md:mt-15 ">
      <div className="w-[20rem] md:w-[30rem] md:mt-5 ">
        <h6 className="h6 text-center text-[#23a6f0]">Practice Advice</h6>
        <h2 className="h2 md:w-[25rem] font-bold text-black text-center">
          Featured Posts
        </h2>
        <p className="p md:w-[29rem] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-[70rem]">
        {featuredPosts.map((item, i) => (
          <div key={i} className="w-[22rem]  p-3 shadow-xl ">
            <div>
              {" "}
              <img className="w-[22rem] h-[19rem]" src={item} alt="" />
            </div>
            <div className="my-5">
              <NavLink to="" className="link text-[#8ec2f2] text-start mr-5">
                Google
              </NavLink>
              <NavLink to="" className="link mr-5">
                Trending
              </NavLink>
              <NavLink to="" className="link">
                New
              </NavLink>
            </div>
            <div>
              <div className="my-5">
                <h4>Loudest à la Madison #1 (L'integral)</h4>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
              </div>
              <div className="flex flex-row justify-around my-5">
                <div className="flex flex-row gap-3">
                  <FaClock className="text-[#23a6f0]" />
                  <p className="small">22 April 2025</p>
                </div>
                <div className="flex flex-row gap-3">
                  <GoGraph className="text-[#23856d]" />
                  <p className="small">10 Comments</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <NavLink to="" className="link">
                  Learn More
                </NavLink>
                <FaChevronRight className="mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
