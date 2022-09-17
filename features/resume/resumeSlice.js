import { createSlice } from "@reduxjs/toolkit"
import { resumeInputCodes } from "../../constants/constants"
import initialState from "./resumeInitialState"

// const initialState = {
//   name: ''
// }



export const resumeSlice = createSlice({
  name: "resumeReducer",
  initialState,
  reducers: {
    
  }
})

export const resumeActions = resumeSlice.actions

export default resumeSlice.reducer