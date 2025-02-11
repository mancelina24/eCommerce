import { NavLink } from "react-router-dom";

const NavLinkMenu = () => {
  return (
    <div className="hidden md:flex md:mr-40">
      <ul className=" link md:flex flex-row gap-4 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
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
