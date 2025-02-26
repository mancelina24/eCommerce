import { NavLink, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
} from "../../store/actions/productActions";

const NavLinkMenu = () => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory;
  const { categories } = useSelector((state) => state.product);
  const shopRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleShopClick = () => {
    dispatch(fetchProducts()); // Tüm ürünleri getir
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
    <div className="hidden text-gray-700 md:flex">
      <ul className="md:flex flex-row gap-2 ">
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
              className="absolute bg-white shadow-md py-3 px-4 z-50 left-0 top-full transition-all duration-300 ease-in-out transform opacity-100"
              style={{ minWidth: "300px" }}
            >
              <div className="flex flex-row gap-10 py-1 px-1">
                <div className="flex flex-col gap-2">
                  <div className="text-black font-bold mb-2 text-lg">Kadın</div>
                  {genderedCategories.kadin.map((item) => {
                    const genderString = getGenderString(item.gender);
                    const categoryName = item.title.toLowerCase();
                    return (
                      <NavLink
                        key={item.id}
                        to={`/shop/${genderString}/${categoryName}/${item.id}`}
                        onClick={() =>
                          dispatch(fetchProducts(item.id, item.gender))
                        }
                        className="link hover:text-blue-600 transition-colors duration-200 text-gray-700"
                      >
                        {item.title}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-black font-bold mb-2 text-lg">Erkek</div>
                  {genderedCategories.erkek.map((item) => {
                    const genderString = getGenderString(item.gender);
                    const categoryName = item.title.toLowerCase();
                    return (
                      <NavLink
                        key={item.id}
                        to={`/shop/${genderString}/${categoryName}/${item.id}`}
                        // onClick={() =>
                        //   dispatch(fetchProducts(item.id, item.gender))
                        // }
                        className="link hover:text-blue-600 transition-colors duration-200 text-gray-700"
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
