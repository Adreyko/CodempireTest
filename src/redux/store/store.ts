import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice/dataSlice";


export const store = configureStore({
    reducer: {
        data: dataSlice
    }
})


export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


