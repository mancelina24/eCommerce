import { NavLink } from "react-router-dom";
import { useState } from "react";

import { shop } from "../../services/homedata";
import * as React from "react";

import Menu from "@mui/material/Menu";

const NavLinkMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hidden md:flex md:mr-40">
      <ul className="link md:flex flex-row gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <div>
          <menu
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="flex flex-row gap-10"
          >
            Shop
          </menu>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <div className="flex flex-row gap-20 w-[23rem] h-[13.5rem]  py-5 px-5 ">
              <div className="flex flex-col gap-2">
                <NavLink
                  className="link text-[#252B42] font-bold mb-2"
                  to="/woman"
                >
                  Woman
                </NavLink>
                {shop.Woman.map((item) => (
                  <NavLink key={item.id} to={item.to}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <NavLink
                  className="link text-[#252B42] font-bold mb-2"
                  to="/man"
                >
                  Man
                </NavLink>
                {shop.Man.map((item) => (
                  <NavLink key={item.id} to={item.to}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </Menu>
        </div>
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
