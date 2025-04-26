import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk('/products/get', async() => {
    const res = await axios.get('https://northwind.vercel.app/api/categories')
    return res.data
})

export const postProductThunk = createAsyncThunk('/products/post', async(data) => {
    const res = await axios.post('https://northwind.vercel.app/api/categories', data)
    return res.data
})

export const updateProductThunk = createAsyncThunk('/products/update', async({id, data}) => {
    const res = await axios.put(`https://northwind.vercel.app/api/categories/${id}`, data)
    return { id, ...data }
})

export const deleteProductThunk = createAsyncThunk('/products/delete', async(id) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
    return id
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // For get
        .addCase(getProductThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        // For post
        .addCase(postProductThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(postProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products.push(action.payload)
        })
        .addCase(postProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

         // For update
        .addCase(updateProductThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(updateProductThunk.fulfilled, (state, action) => {
            state.loading = false
            const index = state.products.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.products[index] = action.payload
            }
        })
        .addCase(updateProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        
        // For delete
        .addCase(deleteProductThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(deleteProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = state.products.filter(item => item.id !== action.payload)
        })
        .addCase(deleteProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer