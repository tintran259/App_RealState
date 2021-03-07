const SHOW_SPLASH = "SHOW_SPLASH"
const HIDE_SPLASH = "HIDE_SPLASH"
const HIDE_LOADING = "HIDE_LOADING"
const SHOW_LOADING = "SHOW_LOADING"
import { NAME_ACTION } from '../../constants'
const actShowSplash = () => {
   return {
      type: SHOW_SPLASH,
   }
}
const actHideSplash = () => {
   return {
      type: HIDE_SPLASH,
   }
}

export const actPostSuccessed = () => {
   return {
      type: NAME_ACTION.POST_SUCCESSED
   }
}
export const actPostUnSuccessed = () => {
   return {
      type: NAME_ACTION.POST_UNSUCCESSED
   }
}

export const actHideLoading = () => {
   return {
      type: HIDE_LOADING
   }
}
export const actShowLoading = () => {
   return {
      type: SHOW_LOADING
   }
}

export {
   actHideSplash,
   actShowSplash,
   SHOW_SPLASH,
   HIDE_SPLASH,
   HIDE_LOADING,
   SHOW_LOADING
}