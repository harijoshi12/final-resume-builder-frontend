import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
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
  reducers: {
    updateItem: (state, action) => {
      const { secId, secName, arrayName, objName, objId, value } = action.payload

      if (secId === "5") {
        state.data[secName][arrayName][0] = value
        console.log("update state= ", current(state).data[secName][arrayName][0])
        console.log("update payload= ", action.payload)
        return
      }
      state.data[secName][arrayName].find(item => item._id === objId)[objName] = value
      console.log("update state= ", current(state).data[secName][arrayName].find(item => item._id === objId)[objName])
      console.log("update payload= ", action.payload)
    },

    addItem: (state, action) => {
      state[action.path].push(action.payload)
    },

    deleteItem: (state, action) => {
      state[action.path].filter(item => item.id != id)
    }
  },
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



export const { updateItem, addItem, deleteItem } = resumeSlice.actions

export default resumeSlice.reducer