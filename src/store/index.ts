/* ============================================================================= 
#
# Date: 2020-03-25 15:05:45
# LastEditors: gzk
# LastEditTime: 2020-03-28 13:11:55
#
============================================================================= */
/* ============================================================================= 
#
# Date: 2020-03-25 15:05:45
# LastEditors: gzk
# LastEditTime: 2020-03-27 09:29:32
#
============================================================================= */
/* ============================================================================= 
#
# Date: 2020-03-25 15:05:45
# LastEditors: gzk
# LastEditTime: 2020-03-25 18:10:19
#
============================================================================= */
/* ============================================================================= 
#
# Date: 2020-03-25 15:05:45
# LastEditors: gzk
# LastEditTime: 2020-03-25 15:11:26
#
============================================================================= */
/*
 * @Date: 2020-03-25 15:05:45
 * @LastEditors: gzk
 * @LastEditTime: 2020-03-25 15:05:45
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(require('redux-logger').createLogger())
// }

const enhancer = compose(
  applyMiddleware(...[thunkMiddleware]),
  // other store enhancers if any
)

const store = createStore(rootReducer, enhancer);
 
export default store