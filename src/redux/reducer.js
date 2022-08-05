import { combineReducers } from 'redux';
import { initialState } from './initial-state';
import { ADD_CONTACT, FILTER_CONTACT, DEL_CONTACT } from './type';

const itemReducer = (state = initialState.items, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [payload, ...state];

    case DEL_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, { type, payload }) => {
  switch (type) {
    case FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

export const reducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
