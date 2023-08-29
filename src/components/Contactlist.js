import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(state => {
    const filter = state.phonebook.filter.toLowerCase();
    return state.phonebook.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
