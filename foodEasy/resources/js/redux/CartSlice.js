import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { getCookie } from './../Utils';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}

//add to cart
const token = getCookie('token');
export const addToCart = createAsyncThunk('cart/addToCart', async(product_id,{rejectWithValue, dispatch})=>{
    try{
        const res = await axios.post('/cart',product_id,{headers:{
                'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
                'Authorization': `Bearer ${token}`,
        }});
        return res.data;
    }catch  (er) {
        return rejectWithValue(er.response.data);
    }
})

//get from cart
export const getFromCart = createAsyncThunk('cart/getFromCart', async(rejectWithValue)=>{
    try{
        const res = await axios.get('/cart/product',{headers:{
                'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
                'Authorization': `Bearer ${token}`,
        }});
        return res.data;
    }catch  (er) {
        return rejectWithValue(er.response.data);
    }
})

const CartSlice = createSlice({
    name:'cart',
    initialState:{isLoading:false, error:'', cart:[],dataCart:[]},
    extraReducers:(builder)=>{
       
        //addToCart
        builder.addCase(addToCart.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cart = action.payload.data
            state.error = ""
        }),
         
        //getFromCart
        builder.addCase(getFromCart.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(getFromCart.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
        builder.addCase(getFromCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataCart = action.payload.data
            state.error = ""
        })
    }
});

export default CartSlice.reducer;