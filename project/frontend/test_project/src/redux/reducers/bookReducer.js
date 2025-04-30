import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const getBooksThunk = createAsyncThunk('/books/get', async () => {
    const res = await axios.get('http://localhost:5000/books/')
    return res.data
})

export const postBooksThunk = createAsyncThunk('/books/post', async (data) => {
    const res = await axios.post('http://localhost:5000/books/', data)
    return res.data
})

export const deleteBooksThunk = createAsyncThunk('/books/delete', async (id) => {
    const res = await axios.delete(`http://localhost:5000/books/${id}`)
    return id
})

const bookSlice = createSlice({
    name: "books",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

        .addCase(getBooksThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getBooksThunk.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload
        })
        .addCase(getBooksThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        //post 

        .addCase(postBooksThunk.fulfilled, (state, action) => {
            state.loading = false
            state.books.push(action.payload)
        })

        //delete

        .addCase(deleteBooksThunk.fulfilled, (state, action) => {
            state.loading = false
            state.books = state.books.filter(item => item._id !== action.payload)
        })
    }
})

export default bookSlice.reducer