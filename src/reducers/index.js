import { combineReducers } from 'redux-immutable';
import batchReducer from './batchReducer.js';
import logSlowReducers from './logSlowReducers.js';
import pageUI from './pageUI';


let reducers = {
  pageUI,
}
if (process.env.NODE_ENV === 'development') {
  reducers = logSlowReducers(reducers, 1);
}
const rootReducer = combineReducers(reducers);
export default batchReducer(rootReducer);