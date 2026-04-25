import { createSlice } from "@reduxjs/toolkit";

// Filtering logic will live in custom hooks.
const productSlice = createSlice({
  initialState: {
    products: [],
  },
  name: "product",
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
