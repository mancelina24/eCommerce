import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import DropdownButton from "react-bootstrap/DropdownButton";

const NavLinkMenu = () => {
  return (
    <div className="hidden md:flex md:mr-40">
      <ul className=" link md:flex flex-row gap-4 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              type="text"
              id="dropdown-basic"
              className=" link md:flex flex-row items-start border-none bg-white p-0 "
            >
              Shop
            </Dropdown.Toggle>
            <Dropdown.Menu className="flex flex-row gap-10 w-[24rem] mt-5 bg-amber-500 pl-5 py-5">
              <div className="flex flex-col gap-2 w-[50%]">
                <NavLink className="text-black" to="/about">
                  Kadın
                </NavLink>
                <NavLink to="/about">Bags</NavLink>
                <NavLink to="/about">Belts</NavLink>
                <NavLink to="/about">Cosmetics</NavLink>
                <NavLink to="/about">Hats</NavLink>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink className="text-black" to="/about">
                  Erkek
                </NavLink>
                <NavLink to="/about">Bags</NavLink>
                <NavLink to="/about">Belts</NavLink>
                <NavLink to="/about">Cosmetics</NavLink>
                <NavLink to="/about">Hats</NavLink>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/pages">Pages</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinkMenu;
