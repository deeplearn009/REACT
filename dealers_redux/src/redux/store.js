import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducers/dashReducer'

export  const store = configureStore({
    reducer: {
        products: productsSlice
    }
})

