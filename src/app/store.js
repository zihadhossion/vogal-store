import { configureStore } from "@reduxjs/toolkit";
import { apiAuth } from "../services/apiAuth";
import { apiBlogs } from "../services/apiBlogs";
import { apiCategories } from "../services/apiCategories";
import { apiProducts } from "../services/apiProducts";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";
import { apiOrder } from "../services/apiOrder";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [apiAuth.reducerPath]: apiAuth.reducer,
        [apiBlogs.reducerPath]: apiBlogs.reducer,
        [apiCategories.reducerPath]: apiCategories.reducer,
        [apiProducts.reducerPath]: apiProducts.reducer,
        [apiOrder.reducerPath]: apiOrder.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiAuth.middleware)
            .concat(apiBlogs.middleware)
            .concat(apiCategories.middleware)
            .concat(apiProducts.middleware)
            .concat(apiOrder.middleware),
})

export default store;