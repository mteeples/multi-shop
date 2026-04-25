import ProductList from "./ProductList";
import { formatCategory } from "../../utils/formatCategory";

export default function ProductsByCategory({ categoryName, products }) {
  return (
    <div className="col-lg-9 col-md-8">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">
          {formatCategory(categoryName)}
        </span>
      </h2>
      <ProductList
        products={products}
        productClass="col-lg-4 col-md-6 col-sm-6 pb-1"
        className="row pb-3"
      />
    </div>
  );
}
