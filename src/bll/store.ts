import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './auth/AuthReduces'
import { loaderReducer } from './LoaderReducer'
import { modalReducer } from './ModalReducer'

/* const rootReducer = combineReducers({
 modalReducer:modalReducer
}) */
export const store = configureStore({
  reducer: {
    modal:modalReducer,
    loader:loaderReducer,
    auth:authReducer
  }
})
//export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch