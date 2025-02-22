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
    <div className="hidden md:flex md:mr-150  2xl:mr-250">
      <ul
        activeclassname=""
        className="link md:flex flex-row gap-4 !no-underline"
      >
        <li>
          <Link
            activeclassname=""
            className="text-[#737373] font-bold text-sm leading-[1.5rem] tracking-[0.013rem] cursor-pointer"
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
            <div className="flex flex-row gap-20 w-[23rem] h-[13.5rem] py-5 px-5">
              <div className="flex flex-col gap-2">
                <div className="link text-[#252B42] font-bold mb-2">Kadın</div>
                {genderedCategories.kadin.map((item) => {
                  const genderString = getGenderString(item.gender);
                  const categoryName = item.title.toLowerCase();
                  return (
                    <NavLink
                      key={item.id}
                      to={`/shop/${genderString}/${categoryName}/${item.id}`}
                      onClick={handleClose}
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2">
                <div className="link text-[#252B42] font-bold mb-2">Erkek</div>
                {genderedCategories.erkek.map((item) => {
                  const genderString = getGenderString(item.gender);
                  const categoryName = item.title.toLowerCase();
                  return (
                    <NavLink
                      key={item.id}
                      to={`/shop/${genderString}/${categoryName}/${item.id}`}
                      onClick={handleClose}
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
