import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SetIsModalActive } from "./ModalReducer"

let initialState = {
  isLoader:false
}

export const setLoaderThunk = createAsyncThunk('setLoaderthunk',(value:boolean,thunkAPI)=>{
 thunkAPI.dispatch(SetIsModalActive(value))
  thunkAPI.dispatch(ChangeLoaderStatusAction(value))
})

export const loaderSlice = createSlice({
  name:'loaderSlice',
  initialState,
  reducers:{
    ChangeLoaderStatusAction:(state,action:PayloadAction<boolean>)=>{
      state.isLoader= action.payload
    }
  }
})

export const {ChangeLoaderStatusAction} = loaderSlice.actions
export const loaderReducer = loaderSlice.reducer
