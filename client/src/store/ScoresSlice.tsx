import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    climateScore: 0,
    waterScore: 0,
    soilScore: 0,
    compositeScore: 0,
    droughtScore: 0,
    rainfallScore: 0,
    aridityScore: 0,
    waterAvailabilityScore: 0,
    waterErosionScore: 0,
    irrigationScore: 0,
    organicCarbonScore: 0,
    soilPHScore: 0,
    soilCationScore: 0,
    creditScore: 0
}

export const ScoresSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        store(state, actions) {
            state.climateScore = actions.payload.climateScore
            state.waterScore = actions.payload.waterScore
            state.soilScore = actions.payload.soilScore
            state.compositeScore = actions.payload.compositeScore
            state.droughtScore = actions.payload.droughtScore
            state.rainfallScore = actions.payload.rainfallScore
            state.aridityScore = actions.payload.aridityScore
            state.waterAvailabilityScore = actions.payload.waterAvailabilityScore
            state.waterErosionScore = actions.payload.waterErosionScore
            state.irrigationScore = actions.payload.irrigationScore
            state.organicCarbonScore = actions.payload.organicCarbonScore
            state.soilPHScore = actions.payload.soilPHScore
            state.soilCationScore = actions.payload.soilCationScore
            state.creditScore = actions.payload.creditScore
        },
        reset(state) {
            state.climateScore = 0
            state.waterScore = 0
            state.soilScore = 0
            state.compositeScore = 0
            state.droughtScore = 0
            state.rainfallScore = 0
            state.aridityScore = 0
            state.waterAvailabilityScore = 0
            state.waterErosionScore = 0
            state.irrigationScore = 0
            state.organicCarbonScore = 0
            state.soilPHScore = 0
            state.soilCationScore = 0
            state.creditScore = 0
        }
    }
})

export const ScoresSliceActions = ScoresSlice.actions
