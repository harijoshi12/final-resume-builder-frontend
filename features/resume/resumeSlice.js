import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { resumeInputCodes } from "../../constants/constants"
import axios from 'axios'

const baseUrl = 'http://192.168.1.34:5000/api'

import initialData from './resumeInitialState.js'

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  PENDING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
})

const initialState = {
  data: initialData,
  status: STATUSES.IDLE,
  error: null
}

export const getResumeAsync = createAsyncThunk('resume/fetch', async () => {
  const { data } = await axios.get(`${baseUrl}/resume`)
  console.log(data)
  return data
})

export const createResumeAsync = createAsyncThunk('resume/create', async (token) => {

  const { data } = await axios.post(`${baseUrl}/resume/create`, { contactDetails: {} }, { headers: { token } })
  console.log("create= ", data)
  return data
})

export const resumeSlice = createSlice({
  name: "resumeReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getResumeAsync.pending, (state, action) => {
        state.status = STATUSES.PENDING
      })
      .addCase(getResumeAsync.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.SUCCEEDED
      })
      .addCase(getResumeAsync.rejected, (state, action) => {
        state.status = STATUSES.FAILED
      })
      .addCase(createResumeAsync.pending, (state, action) => {
        state.status = STATUSES.PENDING
      })
      .addCase(createResumeAsync.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.SUCCEEDED
      })
      .addCase(createResumeAsync.rejected, (state, action) => {
        state.status = STATUSES.FAILED
      })
  }

})

export const resumeActions = resumeSlice.actions

export default resumeSlice.reducer