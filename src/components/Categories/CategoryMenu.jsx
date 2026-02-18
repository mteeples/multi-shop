import { useEffect, useState } from "react";

function formatCategory(cat) {
  return cat
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <a
        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
        data-toggle="collapse"
        href="#navbar-vertical"
        style={{ height: "65px", padding: "0 30px" }}
      >
        <h6 className="text-dark m-0">
          <i className="fa fa-bars mr-2"></i>Categories
        </h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav
        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
        id="navbar-vertical"
        style={{ width: `calc(100% - 30px)`, zIndex: 999 }}
      >
        <div className="navbar-nav w-100">
          {categories.map((cat) => {
            return (
              <a
                key={cat}
                href={`/products/category/${cat}`}
                className="nav-item nav-link"
              >
                {formatCategory(cat)}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
