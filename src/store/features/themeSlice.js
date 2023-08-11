import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name : 'theme' , 
    initialState : {
        dark : JSON.parse(localStorage.getItem('dark')) || false
    },
    reducers :{
        toggleTheme : (state)=>{
            state.dark = !state.dark;
            localStorage.setItem("dark" , JSON.stringify(state.dark))
        }
    }
})


export default ThemeSlice.reducer;
export const {toggleTheme} = ThemeSlice.actions