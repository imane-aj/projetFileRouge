import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { getCookie } from '../Utils';

//getDelivery
export const getDeliveries = createAsyncThunk('checkout/getDeliveries', async(rejectWithValue)=>{
  try{
    const token = getCookie('token');
    const res = await axios.get('/admin/getDelivery',{headers:{
            'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
            'Authorization': `Bearer ${token}`,
    }});
    return res.data;
  }catch  (er) {
      return rejectWithValue(er.response.data);
  }
})

const TrackingSlice = createSlice({
    name : 'checkout',
    initialState : {isLoading: false, error: '', getDelivery:[]},
    extraReducers: (builder) => {
        //getDelivery
        builder.addCase(getDeliveries.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(getDeliveries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(getDeliveries.fulfilled, (state, action) => {
        state.isLoading = false,
        state.getDelivery= action.payload
        state.error = ""
        })
      }
})

export default TrackingSlice.reducer;