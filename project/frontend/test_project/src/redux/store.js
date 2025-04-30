import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './reducers/bookReducer.js'

export const store = configureStore({
    reducer: {
        books: bookSlice
    }
})