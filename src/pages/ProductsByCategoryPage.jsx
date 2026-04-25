import Container from "../components/Layout/Container";
import ProductsSidebar from "../components/Products/ProductsSidebar";
import ProductsByCategory from "../components/Products/ProductsByCategory";
import { useParams } from "react-router";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

export default function ProductsByCategoryPage() {
  const { categoryName } = useParams();
  const { brands, products, filterProducts } =
    useFilteredProducts(categoryName);

  // Weird behavior if you navigate from one category to another category.
  // Filters do not reset, since the component is the same. They work as normal
  // once the user interacts with them, but they are not all selected by default.

  return (
    <Container className="container-fluid">
      <Container className="row px-xl-5">
        <ProductsSidebar brands={brands} filterProducts={filterProducts} />
        <ProductsByCategory categoryName={categoryName} products={products} />
      </Container>
    </Container>
  );
}
