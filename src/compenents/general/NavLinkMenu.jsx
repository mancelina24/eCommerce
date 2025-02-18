import { NavLink, Link } from "react-router-dom";

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
    <div className="hidden md:flex md:mr-150  2xl:mr-250">
      <ul
        activeclassname=""
        className="link md:flex flex-row gap-4 !no-underline"
      >
        <li>
          <Link
            activeclassname=""
            className="text-[#737373] font-bold text-sm leading-[1.5rem] tracking-[0.013rem] cursor-pointer !no-underline"
            to="/"
          >
            Home
          </Link>
        </li>
        <div>
          <menu
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="flex flex-row gap-10 "
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
