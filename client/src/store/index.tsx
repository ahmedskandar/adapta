import { configureStore } from "@reduxjs/toolkit";
import { FormSlice } from "./FormSlice";
import { ScoresSlice } from "./ScoresSlice";

export const store = configureStore({
  reducer: {
    form: FormSlice.reducer,
    ScoresSlice: ScoresSlice.reducer,
  },
});
