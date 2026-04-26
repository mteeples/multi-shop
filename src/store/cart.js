import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
    // // Each of these values can be derived from items,
    // // so I will calculate them in my custom hook.
    // numItems: 0,
    // subtotal: 0,
    // shipping: 0,
    // total: 0,
  },
  name: "cart",
  reducers: {
    addItem: (state, action) => {
      const { item } = action.payload;
      const otherItems = state.items.filter(({ id }) => id !== item.id);
      const existingItem = state.items.filter(({ id }) => id === item.id)[0];
      const newItem = existingItem
        ? { ...existingItem, quantity: existingItem.quantity + item.quantity }
        : item;
      const cartItems = [...otherItems, { ...newItem }].sort(
        (a, b) => a.title > b.title,
      );
      state.items = cartItems;
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    },

    removeItem: (state, action) => {
      const { itemId } = action.payload;
      const cartItems = state.items
        .filter(({ id }) => id !== itemId)
        .sort((a, b) => a.title > b.title);
      state.items = cartItems;
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    },

    updateItemQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const otherItems = state.items.filter(({ id }) => id !== itemId);
      const existingItem = state.items.filter(({ id }) => id === itemId)[0];
      const cartItems = [
        ...otherItems,
        { ...existingItem, quantity: newQuantity },
      ].sort((a, b) => a.title > b.title);
      state.items = cartItems;
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    },

    resetCart: (state) => {
      state.items = [];
      sessionStorage.setItem("cartItems", JSON.stringify([]));
    },

    loadSessionCart: (state, action) => {
      const { items } = action.payload;
      state.items = items.sort((a, b) => a.title > b.title);
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  updateItemQuantity,
  resetCart,
  loadSessionCart,
} = cartSlice.actions;
