import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText :''
}
export const searchStore = createSlice({
    name:'searchText',
    initialState,
    reducers:{
        onInput:(state, action)=>{
            state.searchText = action.payload
        }
    }
})

export const {onInput} = searchStore.actions

export default searchStore.reducer