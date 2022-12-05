import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Action } from "@remix-run/router"
import { SetIsModalActive } from "./ModalReducer"

let initialState = {
  isLoader:false 
}

export const setLoaderThunk = createAsyncThunk('setLoaderthunk',(value:boolean,thunkAPI)=>{
 thunkAPI.dispatch(SetIsModalActive({value}))
  thunkAPI.dispatch(ChangeLoaderStatusAction({value}))
})

export const loaderSlice = createSlice({
  name:'loaderSlice',
  initialState,
  reducers:{
    ChangeLoaderStatusAction:(state,action:PayloadAction<{value:boolean}>)=>{
      state.isLoader= action.payload.value
    }
  }
})

export const {ChangeLoaderStatusAction} = loaderSlice.actions
export const loaderReducer = loaderSlice.reducer
