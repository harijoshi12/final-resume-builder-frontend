import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { resumeInputCodes } from "../../constants/constants"
import axios from 'axios'

import { baseUrl } from "../../constants/constants"

import initialData from './resumeInitialState.js'

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  PENDING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed'
})

const initialState = {
  data: {},
  status: STATUSES.IDLE,
  error: null
}

export const updateResumeAsync = createAsyncThunk('resume/update', async () => {
  const { data } = await axios.get(`${baseUrl}/resume`)
  return data
})

export const getResumeAsync = createAsyncThunk('resume/get', async (token) => {
  try {
    const { data } = await axios.get(`${baseUrl}/resume/get`, { headers: { token } })
    console.log("get= ", data)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getOrCreateResumeAsync = createAsyncThunk('resume/getOrCreate', async (token) => {
  try {
    const { data } = await axios.post(`${baseUrl}/resume/get-or-create`, {}, { headers: { token } });
    console.log("get-or-create= ", data)
    return data
  } catch (e) {
    console.log(e);
  }
})

export const resumeSlice = createSlice({
  name: "resumeReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateResumeAsync.pending, (state, action) => {
        state.status = STATUSES.PENDING
      })
      .addCase(updateResumeAsync.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.SUCCEEDED
      })
      .addCase(updateResumeAsync.rejected, (state, action) => {
        state.status = STATUSES.FAILED
      })

      .addCase(getOrCreateResumeAsync.pending, (state, action) => {
        state.status = STATUSES.PENDING
      })
      .addCase(getOrCreateResumeAsync.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.SUCCEEDED
      })
      .addCase(getOrCreateResumeAsync.rejected, (state, action) => {
        state.status = STATUSES.FAILED
      })

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
  }

})

export const resumeActions = resumeSlice.actions

export default resumeSlice.reducer