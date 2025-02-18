import { NavLink, useHistory } from "react-router-dom";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

import NavLinkMenu from "../compenents/general/NavLinkMenu";

const HeaderShop = ({
  setIsMenuOpen,
  isMenuOpen,
  isAuthenticated,
  handleLogout,
  user,
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/signup");
  };

  return (
    <div className="md:w-full">
      {/* Main header */}
      <div className="flex flex-row md:w-[65rem] relative md:left-60 2xl:left-210 justify-center mx-2 my-[1.6rem] gap-[1.5rem]">
        <div className="flex flex-row gap-30">
          <h3 className="h3">Bandage</h3>
          <NavLinkMenu />
        </div>
        <div className="absolute right-[.3rem] md:linkHeader flex flex-row gap-2 items-center">
          {isAuthenticated && user ? (
            <>
              <IoPersonOutline
                onClick={handleLogout}
                className="hidden md:flex w-[1.5rem] h-[1.5rem]"
              />
              <span className="hidden md:block mr-2">{user?.name}</span>
              <p
                onClick={handleLogout}
                className="hidden md:flex w-[1.5rem] h-[1.5rem] md:mr-25 md:mt-1.5 cursor-pointer"
              >
                Logout
              </p>
            </>
          ) : (
            <>
              <IoPersonOutline
                onClick={handleLoginClick}
                className="hidden md:flex w-[1.5rem] h-[1.5rem] cursor-pointer"
              />
              <p
                onClick={handleLoginClick}
                className="hidden md:flex w-[1.5rem] h-[1.5rem] md:mr-25 md:mt-1.5 cursor-pointer"
              >
                Login/Register
              </p>
            </>
          )}
          <IoIosSearch className="hidden md:flex w-[1.5rem] h-[1.5rem]" />
          <SlBasket className="hidden md:flex md:ml-2.5 w-[1.5rem] h-[1.5rem]" />
          <div className="w-8">
            <button onClick={toggleMenu} className="text-xl md:hidden">
              {isMenuOpen ? (
                <FaTimes className="text-black w-[1.5rem] h-[1.5rem]" />
              ) : (
                <FaBars className="text-black w-[1.5rem] h-[1.5rem]" />
              )}
            </button>
            <div
              className={`md:hidden relative top-0 right-45 z-50 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } mt-15 flex-col flex justify-center items-center gap-5`}
              >
                <li>
                  <NavLink className="mobilemenu my-5 md:hidden" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" mobilemenu md:hidden" to="/product">
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobilemenu md:hidden" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobilemenu md:hidden" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <NavLink
                    to="#"
                    onClick={handleLogout}
                    className="flex flex-row justify-center items-center w-[25rem]"
                  >
                    <IoPersonOutline className=" mobilemenu  text-[#23a6f0] w-[2rem] h-[2rem] " />
                    <span className="mobilemenu  text-[#23a6f0] w-[18rem] h-[2rem] ">
                      {user?.name}
                    </span>
                    <p className="mobilemenu  text-[#23a6f0] w-[18rem] h-[2rem] ">
                      Logout
                    </p>
                  </NavLink>
                ) : (
                  <NavLink
                    to="/signup"
                    className="flex flex-row justify-center items-center w-[25rem]"
                  >
                    <IoPersonOutline className=" mobilemenu  text-[#23a6f0] w-[2rem] h-[2rem] " />
                    <p className="mobilemenu  text-[#23a6f0] w-[18rem] h-[2rem] ">
                      Login/Register
                    </p>
                  </NavLink>
                )}
                <NavLink to="/find">
                  <IoIosSearch className=" mobilemenu text-[#23a6f0] w-[2rem] h-[2rem]" />
                </NavLink>
                <NavLink to="/sepet">
                  <SlBasket className="mobilemenu  text-[#23a6f0]  w-[2rem] h-[2rem]" />
                </NavLink>
                <NavLink to="/favori">
                  <FaRegHeart className="mobilemenu  text-[#23a6f0]  w-[2rem] h-[2rem] " />
                </NavLink>
              </ul>
            </div>
          </div>
          <FaRegHeart className=" hidden md:flex md:cursor-pointer w-[1.5rem] h-[1.5rem] " />
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;
