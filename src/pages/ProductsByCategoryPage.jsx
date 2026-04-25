import Container from "../components/Layout/Container";
import ProductsSidebar from "../components/Products/ProductsSidebar";
import ProductsByCategory from "../components/Products/ProductsByCategory";
import { useParams } from "react-router";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

export default function ProductsByCategoryPage() {
  const { categoryName } = useParams();
  const { brands, products, filterProducts } =
    useFilteredProducts(categoryName);

  return (
    <Container className="container-fluid">
      <Container className="row px-xl-5">
        <ProductsSidebar brands={brands} filterProducts={filterProducts} />
        <ProductsByCategory categoryName={categoryName} products={products} />
      </Container>
    </Container>
  );
}
