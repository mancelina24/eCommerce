import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { shop } from "../../services/data";

const NavLinkMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Menü açma/kapatma fonksiyonu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Dışarıya tıklama kontrolü
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Menü dışına tıklanırsa menüyü kapat
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto"; // Menü kapandığında overflow'u eski haline getir
      }
    };

    // Dışarıya tıklama olayını dinle
    document.addEventListener("mousedown", handleClickOutside);

    // Temizleme işlemi
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // isMenuOpen bağımlılığı eklenmeli

  return (
    <div className="hidden md:flex md:mr-40">
      <ul className="link md:flex flex-row gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <Dropdown ref={menuRef} show={isMenuOpen}>
          <Dropdown.Toggle
            type="button"
            className="link md:flex flex-row items-start border-none bg-white p-0"
            onClick={toggleMenu} // Menü açma/kapama işlemi
          >
            Shop
          </Dropdown.Toggle>
          <Dropdown.Menu className="flex flex-row gap-10 w-[24rem] mt-5 bg-amber-500 pl-5 py-5">
            <div className="flex flex-col gap-2 w-[50%]">
              <NavLink className="text-black" to="/woman">
                Woman
              </NavLink>
              {shop.Woman.map((item) => (
                <NavLink key={item.id} to={item.to}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <NavLink className="text-black" to="/man">
                Man
              </NavLink>
              {shop.Man.map((item) => (
                <NavLink key={item.id} to={item.to}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>

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
