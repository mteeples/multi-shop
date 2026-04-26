import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./cart";
import authReducer from "./auth";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
