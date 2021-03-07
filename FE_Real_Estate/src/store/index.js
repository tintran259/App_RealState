import { createStore, applyMiddleware } from 'redux'
import MyReducer from './root-reducer'
import Thunk from 'redux-thunk'
import logger from 'redux-logger'

const Store = createStore(
   MyReducer,
   applyMiddleware(Thunk, logger)
)

export default Store