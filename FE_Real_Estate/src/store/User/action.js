import { NAME_ACTION } from '../../constants'
import { ChangeInfor } from '../../services/User'
import { actLoginSuccess } from '../Login/action'
import { actShowLoading, actHideLoading } from '../App/action'


export const asyncChangeInforUser = ({ id, fullname, image, password, account }) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await ChangeInfor.EditUser({ id, fullname, image, password, account })
         console.log("response ChangeInforUser:", response);
         if (response.status === 200) {
            const dataChange = response.data.data
            dispatch(actHideLoading())
            dispatch(actLoginSuccess(dataChange))
            return {
               ok: true
            }
         }
      } catch (error) {
         console.log("error");
         dispatch(actHideLoading())
         return {
            ok: false
         }
      }
   }
}

export const asyncChangeAvatarUser = ({ id, image }) => {
   return async (dispatch) => {
      try {
         const response = await ChangeInfor.ChangeAvatar({ id, image })
         console.log("response change Aavatart:", response);
         if (response.status === 200) {
            const dataChange = response.data.data
            dispatch(actLoginSuccess(dataChange))
            return {
               ok: true
            }
         }
      } catch (error) {
         console.log("error change Avatar");
      }
   }
}