import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions/productActions";

const NavLinkMenu = () => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  const shopRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleShopClick = () => {
    window.location.href = "/shop";
  };

  const handleShopEnter = () => {
    setIsShopMenuOpen(true);
  };

  const handleShopLeave = () => {
    setIsShopMenuOpen(false);
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
        <li
          ref={shopRef}
          onMouseEnter={handleShopEnter}
          onMouseLeave={handleShopLeave}
          className="relative" // Add position: relative
        >
          <Link
            onClick={handleShopClick}
            className="link font-bold text-xs md:text-sm leading-[1.5rem] tracking-[0.013rem] cursor-pointer "
            to="/shop"
          >
            Shop
          </Link>
          {isShopMenuOpen && (
            <div
              className="absolute bg-white shadow-md -ml-12 py-5 px-5 z-50 top-full" // Add z-index: 50
              style={{ minWidth: "200px" }} // Ensure a minimum width
            >
              <div className="flex flex-row gap-20 w-[23rem] h-[22rem] py-5 px-5">
                <div className="flex flex-col gap-2">
                  <div className="text-black font-bold mb-2">Kadın</div>
                  {genderedCategories.kadin.map((item) => {
                    const genderString = getGenderString(item.gender);
                    const categoryName = item.title.toLowerCase();
                    return (
                      <NavLink
                        key={item.id}
                        to={`/shop/${genderString}/${categoryName}/${item.id}`}
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
                        className="link"
                      >
                        {item.title}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </li>
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
