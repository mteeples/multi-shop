import { useState, useEffect } from "react";
import { formatCategory } from "./CategoryMenu";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const catNames = await fetch(
        "https://dummyjson.com/products/category-list",
      ).then((res) => res.json());

      const products = await fetch("https://dummyjson.com/products?limit=0")
        .then((res) => res.json())
        .then((data) => data.products);

      const catInfo = catNames
        .map((cat) => {
          const catProducts = products.filter((prod) => prod.category === cat);
          return {
            ...catProducts[0],
            numProducts: catProducts.length,
          };
        })
        .filter((cat) => cat.numProducts > 0);

      console.log(catInfo);
      setCategories(catInfo);
    }
    getCategories();
  }, []);

  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {categories.map(({ category, numProducts, thumbnail, title }) => {
          return (
            <div key={category} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <a
                className="text-decoration-none"
                href={`products/category/${category}`}
              >
                <div className="cat-item d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img className="img-fluid" src={thumbnail} alt={title} />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{formatCategory(category)}</h6>
                    <small className="text-body">{numProducts} Products</small>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
