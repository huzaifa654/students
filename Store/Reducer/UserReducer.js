/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {},

};

const userSlice = createSlice({
    name: 'UserDetails',
    initialState: initialState,
    reducers: {

        setUserdetails: (state, action) => {
            state.userDetails = action.payload;
        },



        logoutUser: state => {
            state.userDetails = {};

        },
    },
});

export const {
    logoutUser,
    setUserdetails,

} = userSlice.actions;

export default userSlice.reducer;