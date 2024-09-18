import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
   movies: [],
   generesLoader: false,
   generes: [],
}

export const NetflixSlice = createSlice({
   name: "netflix",
   initialState,
   extraReducers: (builder) => {}
   });


export const store = configureStore({
   reducer: {
      netflix: NetflixSlice.reducer,
   },
})