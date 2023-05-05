import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from './../Utils';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
export const getProducts = createAsyncThunk('product/getProducts', async(rejectWithValue)=>{
    try{
        const res = axios.get('/products',{headers:apiKey});
        return res.data;
    }catch  (er) {
        return rejectWithValue(er.response.data);
    }
})

const ProductSlice = createSlice({
    name:'product',
    initialState:{dataProduct:'', isLoading:false, error:''},
    extraReducers:(builder)=>{
        //getProduct
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error)
        }),
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataProduct= action.payload
            state.error = ""
        })
    }
});

export default ProductSlice.reducer;