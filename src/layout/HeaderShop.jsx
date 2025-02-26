import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

import { logoutUser } from "../store/actions/authActions";
import Header from "./Header";
import NavLinkMenu from "../compenents/general/NavLinkMenu";

const HeaderShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  // Access user and authentication state from Redux
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  // Check for stored user data on component mount
  useEffect(() => {
    if (!user && !loading) {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedToken && storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && parsedUser.email) {
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: parsedUser,
            });
          } else {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
          }
        } catch (error) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      }
    }
  }, [dispatch, user, loading]);

  // Add effect to handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // Push the content down when menu opens
      document.body.style.paddingTop = "300px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingTop = "0";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingTop = "0";
    };
  }, [isMenuOpen]);

  const handleLoginClick = () => {
    history.push("/signup");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/signup");
  };

  return (
    <div className="md:w-full">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <Header />
        <div className="flex flex-row relative justify-between mx-2 my-3 items-center">
          {/* Left Section: HAFFTHEGREAT */}
          <div className="flex items-center">
            <h3 className="h3">HAFFTHEGREAT</h3>
          </div>

          {/* Middle Section: Nav Menu (desktop) */}
          <div className="hidden sm:flex">
            <NavLinkMenu />
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end">
            {/* Desktop Section */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              {/* Login/Logout with Username */}
              {!loading && (
                <>
                  {!isAuthenticated || !user ? (
                    <div className="flex items-center gap-1 min-w-fit">
                      <IoPersonOutline
                        onClick={handleLoginClick}
                        className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
                      />
                      <button
                        onClick={handleLoginClick}
                        className="hover:text-primary transition-colors whitespace-nowrap"
                      >
                        Login
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 min-w-fit">
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="font-medium truncate max-w-[80px]">
                          {user.name}
                        </span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* Icons Section */}
              <div className="flex items-center gap-3 ml-2">
                {/* Search Icon */}
                <IoIosSearch className="w-5 h-5 hover:text-primary transition-colors cursor-pointer shrink-0" />

                {/* Basket Icon */}
                <SlBasket className="w-5 h-5 hover:text-primary transition-colors cursor-pointer shrink-0" />

                {/* Favorite Icon */}
                <FaRegHeart className="w-5 h-5 hover:text-primary transition-colors cursor-pointer shrink-0" />
              </div>
            </div>

            {/* Mobile Section */}
            <div className="md:hidden flex items-center gap-4">
              {/* Mobile Login/Logout */}
              {loading ? (
                <p>Loading...</p>
              ) : isAuthenticated && user ? (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <IoPersonOutline
                    onClick={handleLoginClick}
                    className="w-5 h-5 cursor-pointer hover:text-primary transition-colors"
                  />
                  <button
                    onClick={handleLoginClick}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Login/Register
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6 text-black hover:text-primary transition-colors" />
                ) : (
                  <FaBars className="w-6 h-6 text-black hover:text-primary transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Spacer */}
      <div className="h-[80px] md:h-[100px]"></div>

      {/* Content Spacer */}
      <div className="h-[80px]"></div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed left-0 right-0 bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          top: "100px",
          height: "auto",
          maxHeight: "300px",
        }}
      >
        <div className="px-6 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <NavLink
                className="text-xl font-medium hover:text-primary transition-colors"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-xl font-medium hover:text-primary transition-colors"
                to="/product"
                onClick={toggleMenu}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-xl font-medium hover:text-primary transition-colors"
                to="/pricing"
                onClick={toggleMenu}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-xl font-medium hover:text-primary transition-colors"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;
