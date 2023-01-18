import { configureStore } from "@reduxjs/toolkit";
import { FormSlice } from "./FormSlice";
import { StatsCardPrimeSlice } from "./StatsCardPrimeSlice";

export const store = configureStore({
    reducer: {
        form: FormSlice.reducer,
        StatsCard: StatsCardPrimeSlice.reducer
    }
})