import ProductDetail from "../components/Products/ProductDetail";
import { useParams } from "react-router";

export default function ProductDetailPage() {
  const { productId } = useParams();
  return <ProductDetail productId={productId} />;
}
