import {
   HIDE_SPLASH,
   SHOW_SPLASH,
   SHOW_LOADING,
   HIDE_LOADING
} from './action'
import { NAME_ACTION } from '../../constants'

const initialState = {
   isSplash: true,
   isLoading: false,
   isPost: false
}


const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SHOW_SPLASH:
         return {
            ...state,
            isSplash: true
         }
      case HIDE_SPLASH:
         return {
            ...state,
            isSplash: false
         }
      case SHOW_LOADING:
         return {
            ...state,
            isLoading: true
         }
      case HIDE_LOADING:
         return {
            ...state,
            isLoading: false
         }
      case NAME_ACTION.POST_SUCCESSED:
         return {
            ...state,
            isPost: true
         }
      case NAME_ACTION.POST_UNSUCCESSED:
         return {
            ...state,
            isPost: false
         }
      default:
         return state
   }
}

export default reducer