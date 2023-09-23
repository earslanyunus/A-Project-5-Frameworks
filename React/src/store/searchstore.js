import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText :'',
    searchResult:[],
    searchCategory:''
}
export const searchStore = createSlice({
    name:'searchStore',
    initialState,
    reducers:{
        onInput:(state, action)=>{
            state.searchText = action.payload
        },
        onSearch:(state, action)=>{
            state.searchResult = action.payload
        },
        onCategory:(state,action)=>{
            state.searchCategory = action.payload
        }
    }
})

export const {onInput,onSearch,onCategory} = searchStore.actions

export default searchStore.reducer