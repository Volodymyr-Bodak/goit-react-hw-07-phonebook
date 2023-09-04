import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/phonebookSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.phonebook.contacts.items);
  const filter = useSelector((state) => state.phonebook.filter);
  const isLoading = useSelector((state) => state.phonebook.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); 
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}{' '}
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
