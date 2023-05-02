import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from './../Utils';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
export const AddCat = createAsyncThunk("category/AddCat",async (item, { rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.post('/admin/category',item,{headers:apiKey});
      dispatch(getCat())
      return response.data;
    } catch  (er) {
        return rejectWithValue(er.response.data)
    }
  }
);

export const getCat = createAsyncThunk('category/getCat', async(rejectWithValue)=>{
    try{
        const res = await axios.get('/categories', {headers:apiKey});
        return res.data;
    }catch(e){
        return rejectWithValue(er.res.data);
    }
})

export const deletCat = createAsyncThunk('category/deletCat', async(id,{rejectWithValue, dispatch})=>{
    try{
        await axios.delete(`/admin/category/${id}`, {headers:apiKey});
        dispatch(getCat())
        return id;
    }catch(e){
        return rejectWithValue(er.res.data);
    }
})

const CategorySlice = createSlice({
    name : 'category',
    initialState : {data : [], isLoading: false, error: '', },
    extraReducers: (builder) => {
        builder.addCase(AddCat.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(AddCat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(AddCat.fulfilled, (state, action) => {
        state.isLoading = false,
        state.data= action.payload
        state.error = ""
        }),
        builder.addCase(getCat.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(getCat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(getCat.fulfilled, (state, action) => {
        state.isLoading = false,
        state.data = action.payload,
        state.error = ""
        }),
        builder.addCase(deletCat.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(deletCat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(deletCat.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.data)) { // check if state.data is an array
            state.data = state.data.filter((el) => el.id !== action.payload);
          }
        state.error = ""
        })
      }
})

export default CategorySlice.reducer;