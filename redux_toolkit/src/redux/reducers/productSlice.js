import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk('/products/get', async() => {
    const res = await axios.get('https://northwind.vercel.app/api/categories')
    return res.data
})
export const postProductThunk = createAsyncThunk('/products/post', async(data) => {
    await axios.post('https://northwind.vercel.app/api/categories', data)
    return data
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder

        //For get

        .addCase(getProductThunk.pending, (state) => {
            state.loading = true
        })

        .addCase(getProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })

        .addCase(getProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        //For post

        .addCase(postProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products.push(action.payload)
        })
    }
})

export default productsSlice.reducer