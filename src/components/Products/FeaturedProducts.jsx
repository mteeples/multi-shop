import { useContext } from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../store/product-context";

export default function FeaturedProducts() {
  const { getFeaturedProducts } = useContext(ProductContext);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <ProductList
        products={getFeaturedProducts(8)}
        productClass="col-lg-3 col-md-4 col-sm-6 pb-1"
        className="row px-xl-5"
      />
    </div>
  );
}
