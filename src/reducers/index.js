import { searchReducer } from './searchReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  searchReducer: searchReducer
});