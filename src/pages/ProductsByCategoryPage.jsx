import Container from "../components/Layout/Container";
import ProductsSidebar from "../components/Products/ProductsSidebar";
import ProductsByCategory from "../components/Products/ProductsByCategory";
import { useParams } from "react-router";

export default function ProductsByCategoryPage() {
  const { categoryName } = useParams();
  return (
    <Container className="container-fluid">
      <Container className="row px-xl-5">
        <ProductsSidebar />
        <ProductsByCategory categoryName={categoryName} />
      </Container>
    </Container>
  );
}
