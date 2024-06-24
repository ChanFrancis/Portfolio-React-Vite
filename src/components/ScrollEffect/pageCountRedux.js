import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const pageCountRedux = createSlice({
    name: "pageCount",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if(state.value > 0) state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount} = pageCountRedux.actions
export default pageCountRedux.reducer