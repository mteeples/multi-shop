import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";

function App() {
  return (
    <>
      <Layout>
        {window.location.pathname === "/categories" && <CategoryList />}
      </Layout>
    </>
  );
}

export default App;
