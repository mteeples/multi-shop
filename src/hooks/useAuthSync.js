import { useDispatch } from "react-redux";
import { login } from "../store/auth";

export function useAuthSync() {
  // Use dispatch to update redux store
  const dispatch = useDispatch();

  // Load from session storage
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    dispatch(login(userData));
  }
}
