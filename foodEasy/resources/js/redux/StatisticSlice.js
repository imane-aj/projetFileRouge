import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { getCookie } from '../Utils';

//getOrders
export const OrderVol = createAsyncThunk('statistic/OrderVol', async (unusedArgument, { rejectWithValue })=>{
  try{
    const token = getCookie('token');
    const res = await axios.get('/admin/OrderVolume',{headers:{
            'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
            'Authorization': `Bearer ${token}`,
    }});
    return res.data;
  }catch(er) {
      return rejectWithValue(er.res);
  }
})

const StatisticSlice = createSlice({
    name : 'statistic',
    initialState : {data : [], isLoading: false, error: '', orderV:[]},
    extraReducers: (builder) => {
        //getOrders
        builder.addCase(OrderVol.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(OrderVol.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(error)
        }),
        builder.addCase(OrderVol.fulfilled, (state, action) => {
        state.isLoading = false,
        state.orderV= action.payload
        state.error = ""
        })
      }
})

export default StatisticSlice.reducer;