import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
  },
  reducers: {
    replaceItems: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { replaceItems } = pokemonSlice.actions;

export default pokemonSlice.reducer;
