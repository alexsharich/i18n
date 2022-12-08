import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setLoaderThunk } from './LoaderReducer'

let initialState = {
  isLoginModalActive:false,
  isRegistrationModalActive:false,
  isModalActive:false,
  isSignInModalActive:false
}

export const setIsModalActiveThunk = createAsyncThunk('setIsModalActivethunk',(value:boolean,thunkAPI)=>{
    thunkAPI.dispatch(setIsLoginModalThunk(value))
    thunkAPI.dispatch(setRegistrationModalThunk(value))
    thunkAPI.dispatch(setLoaderThunk(value))
})
export const setIsLoginModalThunk = createAsyncThunk('setLoginModalActivethunk',(value:boolean,thunkAPI)=>{
  thunkAPI.dispatch(SetRegistrationModalAction({value:false}))
  thunkAPI.dispatch(SetIsModalActive({value}))
  thunkAPI.dispatch(SetLoginModalAction({value}))  
})
export const setIsLoginOutModalThunk = createAsyncThunk('setIsLoginOutModalThunk',()=>{
  //window.localStorage.removeItem('token')
})
export const setRegistrationModalThunk = createAsyncThunk('setRegistrationModalActivethunk',(value:boolean,thunkAPI)=>{
  thunkAPI.dispatch(SetLoginModalAction({value:false}))
  thunkAPI.dispatch(SetIsModalActive({value}))
  thunkAPI.dispatch(SetRegistrationModalAction({value}))
})

export const modalSlice = createSlice({
name:'modal',
initialState,
reducers:{
  SetLoginModalAction:(state,action:PayloadAction<{value:boolean}>)=>{
    state.isLoginModalActive = action.payload.value
  },
  SetRegistrationModalAction:(state,action:PayloadAction<{value:boolean}>)=>{
    state.isRegistrationModalActive=action.payload.value
  },
  SetIsModalActive:(state,action:PayloadAction<{value:boolean}>)=>{
    state.isModalActive=action.payload.value
  }
}
})
export const modalReducer = modalSlice.reducer
export const {SetLoginModalAction,SetRegistrationModalAction,SetIsModalActive}  = modalSlice.actions
export const modalThunks = {
  setIsModalActiveThunk,setIsLoginModalThunk,setRegistrationModalThunk
}
/* export const modalReducer = (state:InitialStateType = initialState,action:ActionType):InitialStateType=>{
  switch(action.type){
    case 'SET-LOGIN-CHILD-MODAL':{
      return {...state,loginChildModal:action.value}
    }
    case 'SET-REGISTRATION-CHILD-MODAL':{
      return {...state,registrationChildModal:action.value}
    }
    case 'SET-IS-MODAL-ACTIVE':{
      return {...state,isModalActive:action.value}
    }
    
    default:
      return state
  }
}
type SetLoginModalActionType = {
  type :'SET-LOGIN-CHILD-MODAL'
  value:boolean
}
type SetRegistrationModalActionType = {
  type :'SET-REGISTRATION-CHILD-MODAL'
  value:boolean
}
type SetIsModalActiveType = {
  type :'SET-IS-MODAL-ACTIVE'
  value:boolean
}
const SetLoginModalAction = (value:boolean):SetLoginModalActionType=>{
  return {
    type: 'SET-LOGIN-CHILD-MODAL',
    value
  } 
}

const SetRegistrationModalAction = (value:boolean):SetRegistrationModalActionType=>{
  return {
    type: 'SET-REGISTRATION-CHILD-MODAL',
    value
  }
}
const SetIsModalActive = (value:boolean):SetIsModalActiveType=>{
  return {
    type: 'SET-IS-MODAL-ACTIVE',
    value
  }
}
export const setLoginModalThunkAction=(value:boolean):any=>{
  return (dispatch:any):any=>{
    dispatch(SetIsModalActive(value))
    dispatch(SetLoginModalAction(value))
  }
}
export const setRegistrationModalThunkAction=(value:boolean):any=>{
  return (dispatch:any):any=>{
    dispatch(SetIsModalActive(value))
    dispatch(SetRegistrationModalAction(value))
  }
}
export const setIsModalActiveThunkAction=(value:boolean):any=>{
  return (dispatch:any):any=>{
    dispatch(SetIsModalActive(value))
    dispatch(SetRegistrationModalAction(value))
    dispatch(SetLoginModalAction(value))
  }
} */
