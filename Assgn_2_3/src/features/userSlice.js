import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
        
    },
    
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        },
        loginstart:() => {
        
        },
        logout: (state) => {
            state.user = false;
            localStorage.removeItem("token");
        },
    },
});

export const {login, logout, loginstart} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;


//completely diff file similar to this. selectuser change 