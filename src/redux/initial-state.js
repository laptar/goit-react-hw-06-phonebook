import contactsUsers from '../data/contacts.json';

export const initialState = {
  contacts: {
    items: contactsUsers,
    filter: '',
  },
};
