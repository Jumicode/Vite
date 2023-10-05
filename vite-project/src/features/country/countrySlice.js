import { createSlice } from '@reduxjs/toolkit'


export const countrySlice = createSlice({
    name:'country',

    initialState:{
      country:[],
 
    },


  reducers:{
    setCountry:(state, action) =>{
      state.country = action.payload;
    }
  }
   
})


export const {
  setCountry,
} = countrySlice.actions;




export default countrySlice.reducer;
