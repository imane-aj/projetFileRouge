import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from './../Utils';

// add
export const AddCat = createAsyncThunk("category/AddCat",async (item, { rejectWithValue ,dispatch}) => {
    try {
      const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
      const response = await axios.post('/admin/category',item,{headers:apiKey});
      dispatch(getCat());
      return response.data;
    } catch  (er) {
        return rejectWithValue(er.response.data)
    }
  }
);

//get
export const getCat = createAsyncThunk('category/getCat', async(rejectWithValue)=>{
    try{
      const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
        const res = await axios.get('/categories', {headers:apiKey});
        return res.data;
    }catch(e){
        return rejectWithValue(er.res.data);
    }
})

//update
export const updateCat = createAsyncThunk("category/updateCat",async ({id, formData}, { rejectWithValue ,dispatch}) => {
    try {
      const response = await axios.post(`/admin/category/update/${id}`, formData,{
        headers: {
            'api_password':'Eld5TBhHgiIZgJk4c4VEtlnNxY',
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': 'multipart/form-data',
        }});
      dispatch(getCat());
      return response.data;
    } catch  (er) {
        return rejectWithValue(er.response.data)
    }
  }
);

//delete
export const deletCat = createAsyncThunk('category/deletCat', async(id,{rejectWithValue, dispatch})=>{
    try{
      const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
        await axios.delete(`/admin/category/${id}`, {headers:apiKey});
        dispatch(getCat())
        return id;
    }catch(e){
        return rejectWithValue(er.res.data);
    }
})

//show category with product
export const getCatWithProduct = createAsyncThunk('category/getCatWithProduct', async(id,rejectWithValue)=>{
  try{
    const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
      const res = await axios.get(`category/${id}`, {headers:apiKey});
      return res.data;
  }catch(e){
      return rejectWithValue(er.res.data);
  }
})

const CategorySlice = createSlice({
    name : 'category',
    initialState : {data : [], isLoading: false, error: '', editData:'', CatWithProduct:[]},
    extraReducers: (builder) => {
      //AddCat
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
        //getCat
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
        //deletCat
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
        }),
        //update
        builder.addCase(updateCat.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(updateCat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(updateCat.fulfilled, (state, action) => {
        state.isLoading = false,
        state.editData = action.payload,
        state.error = ""
        }),
        //getCatWithProduct
        builder.addCase(getCatWithProduct.pending, (state) => {
          state.isLoading = true;
        }),
        builder.addCase(getCatWithProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error)
        }),
        builder.addCase(getCatWithProduct.fulfilled, (state, action) => {
        state.isLoading = false,
        state.CatWithProduct = action.payload,
        state.error = ""
        })
      }
})

export default CategorySlice.reducer;