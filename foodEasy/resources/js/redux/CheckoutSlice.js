import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { getCookie } from '../Utils';

// add
export const placeOrder = createAsyncThunk('checkout/placeOrder', async(data,{rejectWithValue, dispatch})=>{
  try{
      const token = getCookie('token');
      const res = await axios.post('/addOrder',data,{headers:{
              'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
              'Authorization': `Bearer ${token}`,
      }});
      return res.data;
  }catch  (er) {
      return rejectWithValue(er.response.data);
  }
})

export const validateOrder = createAsyncThunk('checkout/validateOrder', async(data,{rejectWithValue, dispatch})=>{
  try{
      const token = getCookie('token');
      const res = await axios.post('/validateOrder',data,{headers:{
              'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
              'Authorization': `Bearer ${token}`,
      }});
      return res.data;
  }catch  (er) {
      return rejectWithValue(er.response.data);
  }
})

//getOrders
export const Orders = createAsyncThunk('checkout/Orders', async(rejectWithValue)=>{
  try{
    const token = getCookie('token');
    const res = await axios.get('/admin/getOrders',{headers:{
            'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
            'Authorization': `Bearer ${token}`,
    }});
    return res.data;
  }catch(er) {
      return rejectWithValue(er.res);
  }
})

const CheckoutSlice = createSlice({
    name : 'checkout',
    initialState : {data : [], isLoading: false, error: '', getOrders:[]},
    extraReducers: (builder) => {
      //placeOrder
        builder.addCase(placeOrder.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(placeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false,
        state.data= action.payload
        state.error = ""
        }),
         //validateOrder
         builder.addCase(validateOrder.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(validateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        //getOrders
        builder.addCase(Orders.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(Orders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(error)
        }),
        builder.addCase(Orders.fulfilled, (state, action) => {
        state.isLoading = false,
        state.getOrders= action.payload
        state.error = ""
        })
      }
})

export default CheckoutSlice.reducer;