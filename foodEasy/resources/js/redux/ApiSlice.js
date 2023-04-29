import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
export const NewUser = createAsyncThunk("api/NewUser",async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8000/api/register",user,{headers:apiKey});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

const Api = createSlice({
    name : 'api',
    initialState : {userRegister : {}, isLoading: false, errors: '', success:false},
    extraReducers: (builder) => {
        builder.addCase(NewUser.pending, (state) => {
          state.isLoading = true;
        }),
          builder.addCase(NewUser.rejected, (state, action) => {
            state.isLoading = false;
            state.errors = action.payload;
            console.log(state.errors)
          }),
          builder.addCase(NewUser.fulfilled, (state, action) => {
            state.isLoading = false,
            state.userRegister = action.payload,
            state.errors = ""
            state.success = true
          });
      },
})

export const { setSuccess } = Api.actions;
export default Api.reducer;