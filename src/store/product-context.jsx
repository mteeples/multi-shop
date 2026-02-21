import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
  getCategories: () => {},
  getProductsByCategory: () => {},
  getFeaturedProducts: () => {},
  getProduct: () => {},
});

// Copied from link in the instructions
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export function ProductContextProvider({ children }) {
  // Load from session storage
  const sessionProducts = JSON.parse(sessionStorage.getItem("products"));

  // Set state
  const [products, setProducts] = useState(sessionProducts);

  useEffect(() => {
    if (products !== null) {
      console.log("Backend data already loaded.");
      return;
    }

    async function fetchBackendData() {
      const fetchedProducts = await fetch(
        "https://dummyjson.com/products?limit=0",
      )
        .then((res) => res.json())
        .then((data) => data.products);

      // Update state
      setProducts(fetchedProducts);

      // Update session storage
      sessionStorage.setItem("products", JSON.stringify(fetchedProducts));
    }
    fetchBackendData();

    console.log("Loaded backend data.");
  }, [products]);

  function getCategories() {
    // Pull category field and get unique values
    const allCats = products.map((prod) => prod.category);
    const catSet = new Set(allCats);
    let uniqueCats = [...catSet];
    uniqueCats.sort();

    // For each unique value, return data for first product
    return uniqueCats.map((cat) => {
      const firstProd = products.filter((prod) => prod.category === cat)[0];
      return {
        id: firstProd.id,
        thumbnail: firstProd.thumbnail,
        category: cat,
      };
    });
  }

  function getProductsByCategory(category) {
    return products.filter((prod) => prod.category === category);
  }

  function getFeaturedProducts(numProducts) {
    return getMultipleRandom(products, numProducts);
  }

  function getProduct(productId) {
    return products.filter((prod) => prod.id === productId)[0];
  }

  const ctxVal = {
    getCategories,
    getProductsByCategory,
    getFeaturedProducts,
    getProduct,
  };
  return <ProductContext value={ctxVal}>{children}</ProductContext>;
}
