import { NavLink, Link } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Menu from "@mui/material/Menu";

import { fetchCategories } from "../../store/actions/productActions";

const NavLinkMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const groupCategoriesByGender = (categories) => {
    return categories.reduce(
      (acc, category) => {
        if (category.gender === "k") {
          acc.kadin.push(category);
        } else if (category.gender === "e") {
          acc.erkek.push(category);
        }
        return acc;
      },
      { kadin: [], erkek: [] }
    );
  };

  const genderedCategories = groupCategoriesByGender(categories);

  const getGenderString = (gender) => {
    if (gender === "k") return "kadin";
    if (gender === "e") return "erkek";
    return "";
  };

  return (
    <div className="hidden text-gray-700 md:flex md:mr-150  2xl:mr-250">
      <ul className="md:flex flex-row gap-4 ">
        <li>
          <Link
            className="link font-bold text-xs md:text-sm leading-[1.5rem] tracking-[0.013rem] cursor-pointer "
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
            className="flex flex-row gap-10 link"
          >
            Shop
          </menu>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <div className="flex flex-row gap-20 w-[23rem] h-[22rem] -mt-6 py-5 px-5">
              <div className="flex flex-col gap-2">
                <div className="text-black font-bold mb-2">Kadın</div>
                {genderedCategories.kadin.map((item) => {
                  const genderString = getGenderString(item.gender);
                  const categoryName = item.title.toLowerCase();
                  return (
                    <NavLink
                      key={item.id}
                      to={`/shop/${genderString}/${categoryName}/${item.id}`}
                      onClick={handleClose}
                      className="link"
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#252B42] font-bold mb-2">Erkek</div>
                {genderedCategories.erkek.map((item) => {
                  const genderString = getGenderString(item.gender);
                  const categoryName = item.title.toLowerCase();
                  return (
                    <NavLink
                      key={item.id}
                      to={`/shop/${genderString}/${categoryName}/${item.id}`}
                      onClick={handleClose}
                      className="link"
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </Menu>
        </div>
        <li>
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/blog" className="link">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/pages" className="link">
            Pages
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinkMenu;
