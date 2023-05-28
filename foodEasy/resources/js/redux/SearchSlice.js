import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from './../Utils';

//searchProduct
export const searchProduct = createAsyncThunk(
    'search/searchProduct',
    async (query, { rejectWithValue, dispatch }) => {
      try {
        const response = await axios.get('/searchProducts', {
          headers: {
            api_password: 'Eld5TBhHgiIZgJk4c4VEtlnNxY',
            Accept: 'application/json',
          },
          params: {
            query: query,
          },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const SearchSlice = createSlice({
    name:'search',
    initialState:{searchData:[], isLoading:false, error:''},
    extraReducers:(builder)=>{
        //searchProduct
        builder.addCase(searchProduct.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(searchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error)
        }),
        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchData = action.payload
        })
    }
});

export default SearchSlice.reducer;