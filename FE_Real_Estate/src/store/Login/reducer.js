import { LOGIN_SUCCESS, LOG_OUT } from './action'


const initialState = {
   inforUserLogin: null
}


const reducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_SUCCESS:
         return {
            ...state,
            inforUserLogin: action.payload.userLoginSccess
         }
      case LOG_OUT:
         return {
            ...state,
            inforUserLogin: null
         }
      default:
         return state
   }
}

export default reducer