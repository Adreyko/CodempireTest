import { createSlice } from "@reduxjs/toolkit";
import { ICountries } from "../../../intarfaces/intarfaces";


const initialState = {
    data: [] as ICountries[]
}



const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setSearchCoutries(state,action){
            state.data = action.payload
        },
        setSortByTotal(state,action){
            state.data = action.payload
        },
        setSortByName(state,action){
            state.data = action.payload
        }

    }
})



export const { setData,setSearchCoutries,setSortByTotal,setSortByName } = dataSlice.actions


export default dataSlice.reducer