import { createSlice } from "@reduxjs/toolkit"
import { authInputCodes } from "../../constants/constants"

const initialState = {
  [authInputCodes.USERNAME]: "",
  [authInputCodes.EMAIL]: "",
  [authInputCodes.PASSWORD]: "",
  [authInputCodes.CONFIRMPASSWORD]: "",
  [authInputCodes.IMAGESRC]: ""
}

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {

  }
})

export const authActions = authSlice.actions

export default authSlice.reducer