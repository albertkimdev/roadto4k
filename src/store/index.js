import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import initialState from './initialstate'

const middleware = [thunk]
const enhancers = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
)

// if (module.hot) {
//   module.hot.accept('../reducers', () => {
//     const nextReducer = combineReducers(require('../reducers'));
//     store.replaceReducer(nextReducer);
//   });
// }

export default store
