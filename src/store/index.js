import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
