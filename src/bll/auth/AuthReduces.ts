import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { i18nAPI, LoginParamsType } from "../../dal/i18nAPI"
import { setLoaderThunk } from "../LoaderReducer"
import { setIsModalActiveThunk } from "../ModalReducer"

const initialState = {
  createdAt: "",
  email: "",
  fullName: "",
  token: "",
  updatedAt: "",
  __v: 0,
  _id :  "",
  initialized:false
}
export const authLoginThunk = createAsyncThunk('authLoginThunk',async(param:LoginParamsType,thunkAPI)=>{
  thunkAPI.dispatch(setIsModalActiveThunk(false))
  thunkAPI.dispatch(setLoaderThunk(true))
  try{
    const res  = await i18nAPI.login(param)
    thunkAPI.dispatch(SetProfile(res.data))
    thunkAPI.dispatch(IsInitialized({value:true}))
    thunkAPI.dispatch(setLoaderThunk(false))
    if('token' in res.data){
      window.localStorage.setItem('token',res.data.token)
    }else {
      alert('problems with authorization ...')
    }
  }catch(err){
    console.log(err)
    thunkAPI.dispatch(setLoaderThunk(true))
  }
})

export const authSlice = createSlice({
name:'authSlice',
initialState,
reducers:{
  IsInitialized:(state,action:PayloadAction<{value:boolean}>)=>{
    state.initialized = action.payload.value
  },
  SetProfile:(state,action:PayloadAction<any>)=>{
     return action.payload
  },ClearProfile:(state,action:PayloadAction<{}>)=>{
    return {
      createdAt: "",
  email: "",
  fullName: "",
  token: "",
  updatedAt: "",
  __v: 0,
  _id :  "",
  initialized:false
    }
  }
}
})

export const authReducer = authSlice.reducer
export const {IsInitialized,SetProfile, ClearProfile} = authSlice.actions
