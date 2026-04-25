import { useDispatch } from "react-redux";
import { setProducts } from "../store/product";
import { useEffect } from "react";

export function useProductSync() {
  // I don't think I still need to use session storage, since the
  // global state should persist, but I left it in just in case.

  // Use dispatch to update redux store
  const dispatch = useDispatch();

  // Load from session storage
  const sessionProducts = JSON.parse(sessionStorage.getItem("products"));

  // Fetch the product data
  useEffect(() => {
    // Don't need to load if we already have for the session
    if (sessionProducts !== null) {
      dispatch(setProducts(sessionProducts));
      return;
    }

    async function fetchBackendData() {
      const fetchedProducts = await fetch(
        "https://dummyjson.com/products?limit=0",
      )
        .then((res) => res.json())
        .then((data) => data.products);

      dispatch(setProducts(fetchedProducts));

      // Update session storage
      sessionStorage.setItem("products", JSON.stringify(fetchedProducts));
    }
    fetchBackendData();
  }, [dispatch]);
}
