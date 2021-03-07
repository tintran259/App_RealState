import { combineReducers } from 'redux'
import LoginReducer from './Login/reducer'
import AppReducer from './App/reducer'
import UserReducer from './User/reducer'
import PostReducer from './Post/reducer'

const MyReducer = combineReducers({
   Auth: LoginReducer,
   App: AppReducer,
   User: UserReducer,
   Post: PostReducer
})

export default MyReducer