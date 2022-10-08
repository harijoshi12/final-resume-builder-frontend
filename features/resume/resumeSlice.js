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



export const updateResumeAsync = createAsyncThunk('resume/update', async (token, { getState }) => {
  try {
    const { templateId, secContactDetails, secEducations, secExperiences, secInterests, secLanguages, secPersonalInfo, secProgLangs, secProjects, secTechSkills } = getState().resume.data
    const { data } = await axios.put(`${baseUrl}/resume/update`, { templateId, secContactDetails, secEducations, secExperiences, secInterests, secLanguages, secPersonalInfo, secProgLangs, secProjects, secTechSkills }, { headers: { token } })
    console.log("update response= ", data)
    return data
  } catch (error) {
    console.log(error)
  }
})



export const getResumeAsync = createAsyncThunk('resume/get', async (token, { getState }) => {
  try {
    const { data } = await axios.get(`${baseUrl}/resume/get`, { headers: { token } })
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getOrCreateResumeAsync = createAsyncThunk('resume/getOrCreate', async (token) => {
  try {
    const { data } = await axios.post(`${baseUrl}/resume/get-or-create`, {}, { headers: { token } });
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
      const { secId, secName, type, arrayName, objName, objId, value } = action.payload

      if (type === "secTitle") {
        state.data[secName].secTitle = value
        return
      }
      if (secId === "5") {
        state.data[secName][arrayName][0] = value
        return
      }
      state.data[secName][arrayName].find(item => item.id === objId)[objName] = value
    },

    addItem: (state, action) => {
      const { secName, arrayName, value } = action.payload
      state.data[secName][arrayName].push(value)
    },

    deleteItem: (state, action) => {
      const { secName, arrayName, objId } = action.payload
      state.data[secName][arrayName] = current(state).data[secName][arrayName].filter(item => item.id !== objId)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateResumeAsync.pending, (state, action) => {
        state.status = STATUSES.SUCCEEDED
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