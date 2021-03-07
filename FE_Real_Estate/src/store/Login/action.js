import { PostLogin } from '../../services/Authentication/Login'
import {
   actShowLoading,
   actHideLoading
} from '../../store/App/action'
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOG_OUT = "LOG_OUT"

const actLoginSuccess = (userLoginSccess) => {
   return {
      type: LOGIN_SUCCESS,
      payload: {
         userLoginSccess
      }
   }
}
export const actLogout = () => {
   return {
      type: LOG_OUT
   }
}

export const asyncLoginForm = ({ username, password }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await PostLogin.FormLogin({ username, password })
         console.log("response:", response);
         if (response.data === "") {
            dispatch(actHideLoading())
            return {
               ok: false
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: true,
               res: response.data
            }
         }
      } catch (error) {
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}

export const asyncRegister = ({ username, password, fullname, image }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await PostLogin.Register({ username, password, fullname, image })
         console.log("Response:", response);
         if (response.data === true) {
            dispatch(actHideLoading())
            return {
               ok: true
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false,
            }
         }
      } catch (error) {
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}

export {
   LOGIN_SUCCESS,
   actLoginSuccess
}