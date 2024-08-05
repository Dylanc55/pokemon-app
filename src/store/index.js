import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui";
import pokemonReducer from "./pokemon";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
