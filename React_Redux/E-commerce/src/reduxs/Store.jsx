import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import wishlistReducer from "./WishlistSlice";
import orderReducer from "./OrderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer
  },
});
