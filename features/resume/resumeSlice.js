import { createSlice, current } from "@reduxjs/toolkit";
import { resumeInputCodes } from "../../constants/constants";
import initialState from "./resumeInitialState";

// const initialState = {
//   name: ''
// }

console.log("initial state: ", initialState);

export const resumeSlice = createSlice({
  name: "resumeReducer",
  initialState,
  reducers: {
    changeState: (state, action) => {

      if (action?.payload?.type === "setTitle") {
        state.secTitles = current(state).secTitles.map((title) => title?.id === action?.payload?.id ? { ...title, secTitle: action.payload.newValue } : title);
      } else {
        state[action.payload.pathName] = action.payload.value;
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('resumeData', JSON.stringify(current(state)));
      }
    },

    // TODO create another action for that
    changeSetTitles: (state, action) => {},
  },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
