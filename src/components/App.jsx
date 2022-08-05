import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { delContactAction, filterContactAction } from '../redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const contactState = useSelector(state => state);

  const handleChangeInput = e => {
    dispatch(filterContactAction(e.target.value));
  };

  // const hendleUpdateContacts = data => {
  // if (
  //   contacts.find(
  //     ({ name }) => name.toLowerCase() === data.name.toLowerCase()
  //   )
  // ) {
  //   alert(`${data.name} is already in contacts`);
  // } else {
  //   setContacts(prev => [data, ...prev]);
  // }
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onChange={handleChangeInput} value={contactState.filter} />
      <ContactList />
    </div>
  );
};
