import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalIsVisible: false,
  },
  reducers: {
    setModalIsVisible: (state, { payload }) => {
      state.modalIsVisible = payload;
    },
  },
});

export const { setModalIsVisible } = uiSlice.actions;

export default uiSlice.reducer;
