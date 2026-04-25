import { useDispatch } from "react-redux";
import { setProducts } from "../store/product";
import { useEffect } from "react";

export function useProductSync() {
  // Use dispatch to update redux store
  const dispatch = useDispatch();

  // Fetch the product data
  useEffect(() => {
    async function fetchBackendData() {
      const fetchedProducts = await fetch(
        "https://dummyjson.com/products?limit=0",
      )
        .then((res) => res.json())
        .then((data) => data.products);

      dispatch(setProducts(fetchedProducts));
    }
    fetchBackendData();
  }, [dispatch]);
}
