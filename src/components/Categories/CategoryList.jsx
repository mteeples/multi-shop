import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router";
import { formatCategory } from "../../utils/formatCategory";

export default function CategoryList() {
  const { getCategories } = useProducts();

  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {getCategories().map(({ category, numProducts, thumbnail, title }) => {
          return (
            <div key={category} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <Link
                className="text-decoration-none"
                to={`/products/category/${category}`}
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
