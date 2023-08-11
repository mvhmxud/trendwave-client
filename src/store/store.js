import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/AuthSlice";
import ProductsSlice from "./features/ProductsSlice";
import CartSlice from "./features/CartSlice";
import themeSlice from "./features/themeSlice";
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products : ProductsSlice,
    cart : CartSlice,
    theme : themeSlice
  },
});

export default store;
