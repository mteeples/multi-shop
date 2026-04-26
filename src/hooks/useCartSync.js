import { useDispatch } from "react-redux";
import { loadSessionCart } from "../store/cart";

export function useCartSync() {
  // Use dispatch to update redux store
  const dispatch = useDispatch();

  // Load from session storage
  const sessionCart = JSON.parse(sessionStorage.getItem("cartItems"));
  if (sessionCart) {
    dispatch(loadSessionCart({ sessionCart }));
  }
}
