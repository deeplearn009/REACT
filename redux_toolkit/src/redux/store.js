import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducers/productSlice'

export  const store = configureStore({
    reducer: {
        products: productsSlice
    }
})

