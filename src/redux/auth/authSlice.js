import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
    
  },
});

export const authReducer = authSlice.reducer;
