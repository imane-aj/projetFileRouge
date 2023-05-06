import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { getCookie } from './../Utils';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
export const getProducts = createAsyncThunk('product/getProducts', async(rejectWithValue)=>{
    try{
        const res = await axios.get('/products',{headers:apiKey});
        return res.data;
    }catch  (er) {
        return rejectWithValue(er.res.data);
    }
})

// add
export const AddProduct = createAsyncThunk("product/AddProduct",async (item, { rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.post('/admin/product',item,{headers:apiKey});
      dispatch(getProducts());
      return response.data;
    } catch  (er) {
        return rejectWithValue(er.response.data)
    }
  }
);

//delete
export const deletProduct = createAsyncThunk('product/deletProduct', async(id,{rejectWithValue, dispatch})=>{
    try{
        await axios.delete(`/admin/product/${id}`, {headers:apiKey});
        dispatch(getProducts())
        return id;
    }catch(e){
        return rejectWithValue(er.res.data);
    }
})

//add to cart
const token = getCookie('token');
export const addToCart = createAsyncThunk('product/addToCart', async(product_id,{rejectWithValue})=>{
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

const ProductSlice = createSlice({
    name:'product',
    initialState:{data:[], isLoading:false, error:'', cart:[], count:''},
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
            state.data= action.payload
            state.error = ""
        })

        //AddProduct
        builder.addCase(AddProduct.pending, (state) => {
            state.isLoading = true;
          }),
          builder.addCase(AddProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          console.log(state.error)
          }),
          builder.addCase(AddProduct.fulfilled, (state, action) => {
          state.isLoading = false,
          state.data= action.payload
          state.error = ""
          }),
          
         //addToCart
         builder.addCase(addToCart.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error)
        }),
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cart = action.payload.data
            state.error = ""
        }),

         //deletCat
        builder.addCase(deletProduct.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(deletProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
        builder.addCase(deletProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.data)) { // check if state.data is an array
            state.data = state.data.filter((el) => el.id !== action.payload);
          }
        state.error = ""
        })
    }
});

export default ProductSlice.reducer;