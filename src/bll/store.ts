import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { modalReducer } from './ModalReducer'

/* const rootReducer = combineReducers({
 modalReducer:modalReducer
}) */
export const store = configureStore({
  reducer: {
    modal:modalReducer
  }
})
//export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch