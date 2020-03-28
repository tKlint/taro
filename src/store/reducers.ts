/* ============================================================================= 
#
# Date: 2020-03-25 18:09:22
# LastEditors: gzk
# LastEditTime: 2020-03-28 14:13:36
#
============================================================================= */
import rootState from './state'
export default function rootReducer(state = rootState, action) {
    switch (action.type) {
        case "LOGIN_STATE" :
            return {
                ...state,
                phone: action.payload.phone
            }
        default :
        return state
    }
}