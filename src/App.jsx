import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductsByCategory from "./components/Products/ProductsByCategory";
import ProductsSidebar from "./components/Products/ProductsSidebar";
import Container from "./components/Layout/Container";

function App() {
  return (
    <>
      <Layout>
        {window.location.pathname === "/" && <FeaturedProducts />}
        {window.location.pathname === "/categories" && <CategoryList />}
        {window.location.pathname.startsWith("/products/category/") && (
          <Container className="container-fluid">
            <Container className="row px-xl-5">
              <ProductsSidebar />
              <ProductsByCategory
                categoryName={window.location.pathname.split("/").pop()}
              />
            </Container>
          </Container>
        )}
      </Layout>
    </>
  );
}

export default App;
