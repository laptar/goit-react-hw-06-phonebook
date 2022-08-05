import { combineReducers } from 'redux';
import { store } from './store';
import { initialState } from './initial-state';
export const reducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const itemReducer = (store = initialState, { type, peyload }) => {
  return store;
};
