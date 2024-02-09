import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthentication: false,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLogin:(state,action)=>{
        state.user = action.payload;
        state.isAuthentication = true;
    },
    userLogout:(state)=>{
        state.user = null;
        state.isAuthentication = false;
    }
  },
});

export const {userLogin,userLogout} = authSlice.actions;
export default authSlice.reducer;