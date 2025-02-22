import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/actions/productActions";
const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (fetchState === "FETCHING") {
    return <p>Loading categories...</p>;
  }

  if (fetchState === "FETCH_ERROR") {
    return <p>Error fetching categories.</p>;
  }

  const getGenderString = (gender) => {
    if (gender === "k") return "kadin";
    if (gender === "e") return "erkek";
    return "";
  };

  return (
    <div className="category-list">
      <h2>Categories</h2>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/shop/${getGenderString(
            category.gender
          )}/${category.title.toLowerCase()}/${category.id}`}
          className="category-item"
        >
          <img src={category.img} alt={category.title} />
          <h3>{category.title}</h3>
          <p>Rating: {category.rating}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
