import { ADD_CONTACT, FILTER_CONTACT, DEL_CONTACT } from './type';

export const delContactAction = id => ({ type: DEL_CONTACT, payload: id });
export const addContactAction = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});
export const filterContactAction = str => ({
  type: FILTER_CONTACT,
  payload: str,
});
