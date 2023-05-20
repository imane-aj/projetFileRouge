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

const CheckoutSlice = createSlice({
    name : 'checkout',
    initialState : {data : [], isLoading: false, error: ''},
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
        })
      }
})

export default CheckoutSlice.reducer;