import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";
import FeaturedProducts from "./components/Products/FeaturedProducts";

function App() {
  return (
    <>
      <Layout>
        {window.location.pathname === "/" && <FeaturedProducts />}
        {window.location.pathname === "/categories" && <CategoryList />}
      </Layout>
    </>
  );
}

export default App;
