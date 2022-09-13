import { createSlice } from "@reduxjs/toolkit"
import { userInputCodes } from "../../constants/constants"

const initialState = {
  [userInputCodes.USERNAME]: "",
  [userInputCodes.EMAIL]: "",
  [userInputCodes.PASSWORD]: "",
  [userInputCodes.CONFIRMPASSWORD]: "",
  [userInputCodes.IMAGESRC]: ""
}

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {

  }
})

export const authActions = authSlice.actions

export default authSlice.reducer