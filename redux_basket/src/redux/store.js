import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/basketSlice'

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})