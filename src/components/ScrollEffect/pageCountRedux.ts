import { createSlice } from "@reduxjs/toolkit";

interface PageCountState {
    value: number;
}

const initialState: PageCountState = {
    value: 0,
};

const pageCountRedux = createSlice({
    name: "pageCount",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) state.value -= 1;
        },
    },
});

export const { increment, decrement } = pageCountRedux.actions;
export default pageCountRedux.reducer;
