import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/productActions";

const NavLinkMenu = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className="hidden sm:flex items-center space-x-6">
      {" "}
      {/* sm:flex ile mobil dışında görünür */}
      <Link to="/" className="nav-link">
        Home
      </Link>
      {/* Shop Dropdown */}
      <div className="group relative">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.gender}/${category.title}/${category.id}`}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/pages" className="nav-link">
        Pages
      </Link>
    </nav>
  );
};

export default NavLinkMenu;
