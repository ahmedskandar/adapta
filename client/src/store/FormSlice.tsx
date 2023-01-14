import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasComputed: false
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        hasComputed(state) {
            state.hasComputed = true
        }
    }
})

export const FormSliceActions = FormSlice.actions;
