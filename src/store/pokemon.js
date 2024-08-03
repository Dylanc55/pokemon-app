import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
    selected: null,
  },
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
    },
    setSelected: (state, { payload }) => {
      state.selected = payload;
    },
  },
});

export const { setItems, setSelected } = pokemonSlice.actions;

export default pokemonSlice.reducer;
