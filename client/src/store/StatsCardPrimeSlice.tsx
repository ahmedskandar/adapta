import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    climateScore: 0,
    waterScore: 0,
    soilScore: 0,
    compositeScore: 0
}

export const StatsCardPrimeSlice = createSlice({
    name: 'StatsCard',
    initialState,
    reducers: {
        store(state, actions) {
            state.climateScore = actions.payload.climateScore
            state.waterScore = actions.payload.waterScore
            state.soilScore = actions.payload.soilScore
            state.compositeScore = actions.payload.compositeScore
        },
        reset(state) {
            state.climateScore = 0
            state.waterScore = 0
            state.soilScore = 0
            state.compositeScore = 0
        }
    }
})

export const StatsCardPrimeSliceActions = StatsCardPrimeSlice.actions
