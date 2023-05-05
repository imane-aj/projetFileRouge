import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCookie, removeCookie  } from '../Utils';
import axios from './../Utils';

const apiKey = {api_password: "Eld5TBhHgiIZgJk4c4VEtlnNxY"}
export const NewUser = createAsyncThunk("api/NewUser",async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register",user,{headers:apiKey});
      const token = response.data.access_token;
      setCookie("token", token, 1);
      return response.data;
    } catch  (er) {
      if(er.response.data.status === 422){
        return rejectWithValue(er.response.data.error)
      }
    }
  }
);

export const loginUser = createAsyncThunk('api/loginUser',async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login',user,{ headers: apiKey });
      const token = response.data.access_token;
      setCookie('token', token, 1);
      localStorage.setItem('role', response.data.user.role);
      return response.data;
    } catch (er) {
      if(er.response.data.status === 401){
        return rejectWithValue(er.response.data.error)
      }
    }
  }
);

export const logoutUser = createAsyncThunk('api/logoutUser',async (_, thunkAPI) => {
    try {
      const response = await axios.post('/logout',{headers:apiKey});
      removeCookie('token');
      localStorage.removeItem('role');
      localStorage.clear();
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.response.data);
    }
  }
);

const Api = createSlice({
    name : 'api',
    initialState : {userRegister : {}, isLoading: false, error: ''},
    extraReducers: (builder) => {
        builder.addCase(NewUser.pending, (state) => {
          state.isLoading = true;
        }),
          builder.addCase(NewUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error)
          }),
          builder.addCase(NewUser.fulfilled, (state, action) => {
            state.isLoading = false,
            state.userRegister = action.payload,
            state.error = ""
          }),
          builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          }),
          builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error)
          }),
          builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            console.log(state.user)
          }),
          builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          builder.addCase(logoutUser.fulfilled, (state,action) => {
            state.user = action.payload;
            console.log(state.user)
            state.isLoading = false;
            state.error = null;
          })
          builder.addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message || action.error.message;
            console.log(state.error)
          });
      },
})

export default Api.reducer;