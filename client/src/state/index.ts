import {
  createSlice,
  // createSelector
} from "@reduxjs/toolkit";

interface GlobalState {
  mode: string;
  userId: string;
}

// * user = name: Konstantine
const initialState: GlobalState = {
  mode: "dark",
  userId: "657abe77f5981dfae4c83204",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

// // export const { actions, reducer } = globalSlice;
// // export const globalSelector = (state: RootState) => state.global;
// // export const modeSelector = createSelector(
// //   globalSelector,
// //   (global) => global.mode
// // );

export default globalSlice.reducer;
