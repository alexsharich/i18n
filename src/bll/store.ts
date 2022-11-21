import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
 
})

export const store = createStore(rootReducer,applyMiddleware(thunk))



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch