import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: [],
    products: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addToBasket: (state, action) => {
            state.basket.push(action.payload);
        },
        removeItem: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload);
        }
    }
});

export const {setProducts, addToBasket, removeItem} = productSlice.actions;

export default productSlice.reducer