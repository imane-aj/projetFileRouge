import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { getCookie } from './../Utils';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
export const getProducts = createAsyncThunk('product/getProducts', async({currentPage,selectedCategory},{rejectWithValue})=>{
    try{
        const res = await axios.get(`/products/${selectedCategory}`, {
            headers: apiKey,
            params: {
              page: currentPage,
            },
          });
         return res.data;
    }catch  (er) {
        return rejectWithValue(er.res.data);
    }
})

// add
export const AddProduct = createAsyncThunk("product/AddProduct",async (item, { rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.post('/admin/product',item,{headers:apiKey});
      await dispatch(getProducts());
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

//update
export const updateProduct = createAsyncThunk("product/updateProduct",async ({id, formData}, { rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.post(`/admin/product/update/${id}`, formData,{
        headers: {
            'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': 'multipart/form-data',
        }});
      dispatch(getProducts());
      return response.data;
    } catch  (er) {
        return rejectWithValue(er.response.data)
    }
  }
);

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

//get from cart
export const getFromCart = createAsyncThunk('product/getFromCart', async({rejectWithValue})=>{
    console.log(token, 'from slice')
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

const ProductSlice = createSlice({
    name:'product',
    initialState:{data:[], isLoading:false, error:'', cart:[], count:'', editData:[], addedData:[],dataCart:[]},
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
          state.addedData= action.payload
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
        }),
         //update
         builder.addCase(updateProduct.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false,
        state.editData = action.payload,
        state.error = ""
        }), 
        //getFromCart
        builder.addCase(getFromCart.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(getFromCart.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error)
        }),
        builder.addCase(getFromCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dataCart = action.payload
            state.error = ""
        })
    }
});

export default ProductSlice.reducer;