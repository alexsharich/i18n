import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setLoaderThunk } from './LoaderReducer'

let initialState = {
  isLoginModalActive: false,
  isLoginOutModalActive: false,
  isRegistrationModalActive: false,
  isModalActive: false,
  isSignInModalActive: false
}

export const setIsModalActiveThunk = createAsyncThunk('setIsModalActivethunk', (value: boolean, thunkAPI) => {
  thunkAPI.dispatch(setIsLoginModalThunk(value))
  thunkAPI.dispatch(setIsLoginOutModalThunk(value))
  thunkAPI.dispatch(setRegistrationModalThunk(value))
  thunkAPI.dispatch(setLoaderThunk(value))
})
export const setIsLoginModalThunk = createAsyncThunk('setLoginModalActivethunk', (value: boolean, thunkAPI) => {
  thunkAPI.dispatch(SetRegistrationModalAction({ value: false }))
  thunkAPI.dispatch(SetIsModalActive({ value }))
  thunkAPI.dispatch(SetLoginModalAction({ value }))
})
export const setIsLoginOutModalThunk = createAsyncThunk('setIsLoginOutModalThunk', (value: boolean, thunkAPI) => {
  thunkAPI.dispatch(SetIsModalActive({ value }))
  thunkAPI.dispatch(SetLoginOutModalAction({ value }))
  window.localStorage.removeItem('token')
})
export const setRegistrationModalThunk = createAsyncThunk('setRegistrationModalActivethunk', (value: boolean, thunkAPI) => {
  thunkAPI.dispatch(SetLoginModalAction({ value: false }))
  thunkAPI.dispatch(SetIsModalActive({ value }))
  thunkAPI.dispatch(SetRegistrationModalAction({ value }))
})

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    SetLoginModalAction: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoginModalActive = action.payload.value
    },
    SetRegistrationModalAction: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isRegistrationModalActive = action.payload.value
    },
    SetIsModalActive: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isModalActive = action.payload.value
    },
    SetLoginOutModalAction: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoginOutModalActive = action.payload.value
    }
  }
})
export const modalReducer = modalSlice.reducer
export const { SetLoginModalAction, SetLoginOutModalAction, SetRegistrationModalAction, SetIsModalActive } = modalSlice.actions
export const modalThunks = {
  setIsModalActiveThunk, setIsLoginModalThunk, setRegistrationModalThunk
}
