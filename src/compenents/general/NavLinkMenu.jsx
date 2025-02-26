import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts, fetchProductsByCategory } from "../../store/actions/productActions"

const NavLinkMenu = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleShopClick = () => {
    // Fetch all products and navigate to the shop page
    dispatch(fetchProducts()).then(() => {
      history.push('/shop');
    });
  };

  const handleCategoryClick = (gender, categoryName, categoryId) => {
    // Navigate to the appropriate category URL
    history.push(`/shop/${gender}/${categoryName}/${categoryId}`);
    // Fetch products for the selected category
    dispatch(fetchProductsByCategory(categoryId));
  };

  return (
    <nav className="hidden sm:flex items-center space-x-6">
      {" "}
      {/* sm:flex ile mobil dışında görünür */}
      <Link to="/" className="nav-link">
        Home
      </Link>
      {/* Shop Dropdown */}
      <div className="group relative">
        <div onClick={handleShopClick} className="nav-link cursor-pointer">
          Shop
        </div>
        <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.gender, category.title, category.id)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {category.title}
            </div>
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
