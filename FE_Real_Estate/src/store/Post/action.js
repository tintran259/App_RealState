import { NAME_ACTION } from '../../constants'
import { GetDataHome } from '../../services/Page'
import { actShowLoading, actHideLoading } from '../App/action'
export const actGetPostDetail = (postDetail) => {
   return {
      type: NAME_ACTION.GET_POST_DETAIL,
      payload: {
         postDetail
      }
   }
}

export const actGetListPost = (listPost) => {
   return {
      type: NAME_ACTION.GET_LIST_POST,
      payload: {
         listPost
      }
   }
}
export const asyncPostNewsStatus = ({
   title,
   address,
   content,
   prices,
   beds,
   baths,
   images,
   description,
   valueCurrent,
   valueName,
   valueArea,
   unit,
   phoneNumber,
   idUser,
   nameUser
}) => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await GetDataHome.postNewsStatus({
            title,
            address,
            content,
            prices,
            beds,
            baths,
            images,
            description,
            valueCurrent,
            valueName,
            valueArea,
            unit,
            phoneNumber,
            idUser,
            nameUser
         })
         console.log("response", response, unit);
         if (response.data !== "") {
            dispatch(actHideLoading())
            return {
               ok: true,
               data: response.data
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false
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

export const asyncGetListPost = () => {
   return async (dispatch) => {
      try {
         dispatch(actShowLoading())
         const response = await GetDataHome.getListProduct()
         console.log("response Home:", response);
         if (response.status === 200) {
            const listPost = response.data
            const listPostActive = listPost.filter((item) => {
               return item.active === true
            })
            dispatch(actGetListPost(listPostActive))
            dispatch(actHideLoading())

            return {
               ok: true
            }
         } else {
            dispatch(actHideLoading())
            return {
               ok: false
            }
         }

      } catch (error) {
         dispatch(actHideLoading())
         console.log("Error:", error);
         return {
            ok: false
         }
      }
   }
}


export const asyncSendGmail = ({ price, adress, name_user, unit, phone, kind, _id }) => {
   return async (dispatch) => {
      try {
         const response = await GetDataHome.sendGmail({ price, adress, name_user, unit, phone, kind, _id })
         console.log("response Send", response);
         if (response.data === "OK") {
            return {
               ok: true
            }
         }
      } catch (error) {
         console.log("Err:", error);
      }
   }
}