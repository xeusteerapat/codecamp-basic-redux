import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { resultsReducer } from './results';

export default combineReducers({
  counterReducer,
  resultsReducer
});
