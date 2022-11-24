import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'

let initialState = {
  loginChildModal:false,
  registrationChildModal:false,
  isModalActive:false
}
type InitialStateType = {
  loginChildModal:boolean
  registrationChildModal:boolean,
  isModalActive:boolean
}
type ActionType = any

export const setIsModalActiveThunk = createAsyncThunk('setIsModalActivethunk',(value:boolean,thunkAPI)=>{
    thunkAPI.dispatch(SetIsModalActive(value))
    thunkAPI.dispatch(SetRegistrationModalAction(value))
    thunkAPI.dispatch(SetLoginModalAction(value))
})
export const setLoginModalThunk = createAsyncThunk('setLoginModalActivethunk',(value:boolean,thunkAPI)=>{
  thunkAPI. dispatch(SetIsModalActive(value))
  thunkAPI.dispatch(SetLoginModalAction(value))
})
export const setRegistrationModalActiveThunk = createAsyncThunk('setRegistrationModalActivethunk',(value:boolean,thunkAPI)=>{
  thunkAPI.dispatch(SetIsModalActive(value))
  thunkAPI.dispatch(SetRegistrationModalAction(value))
})

export const modalSlice = createSlice({
name:'modal',
initialState,
reducers:{
  SetLoginModalAction:(state,action:PayloadAction<boolean>)=>{
state.loginChildModal = action.payload
  },
  SetRegistrationModalAction:(state,action:PayloadAction<boolean>)=>{
    state.registrationChildModal=action.payload
  },
  SetIsModalActive:(state,action:PayloadAction<boolean>)=>{
    state.isModalActive=action.payload
  }
}
})
export const modalReducer = modalSlice.reducer
export const {SetLoginModalAction,SetRegistrationModalAction,SetIsModalActive}  = modalSlice.actions
export const modalThunks = {
  setIsModalActiveThunk,setLoginModalThunk,setRegistrationModalActiveThunk
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
