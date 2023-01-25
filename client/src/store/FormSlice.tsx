import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasComputed: false,
    location: "",
    period: "",
    crop: ""
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        compute(state, actions) {
            state.hasComputed = true
            state.location = actions.payload.location
            state.crop = actions.payload.crop
            state.period = actions.payload.period
        },
        resetComputation(state) {
            state.hasComputed = false
            state.location = ""
            state.crop = ""
            state.period = ""
        },
        setLocation(state, actions) {
            state.location = actions.payload
        }
    }
})

export const FormSliceActions = FormSlice.actions;
