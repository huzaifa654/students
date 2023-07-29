/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Reducer/UserReducer';


export const store = configureStore({
    reducer: {
        UserDetails: UserReducer,
    },
});