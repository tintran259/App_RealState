import { DATA_POST } from '../../mock/DataPost'
import { NAME_ACTION } from '../../constants'

const initialState = {
   listPost: [],
   postDetail: null
}


const reducer = (state = initialState, action) => {
   switch (action.type) {
      case NAME_ACTION.GET_POST_DETAIL:
         return {
            ...state,
            postDetail: action.payload.postDetail
         }
      case NAME_ACTION.GET_LIST_POST:
         return {
            ...state,
            listPost: action.payload.listPost
         }
      default:
         return state;
   }
}

export default reducer