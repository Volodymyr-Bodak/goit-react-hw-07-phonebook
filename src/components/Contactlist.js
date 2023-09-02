import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/asyncActions';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(state => state.phonebook.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    dispatch(fetchContacts());

  };

  return (
    <ul>
      {filteredContacts.map(contact => (
  <li key={contact.id}>
    {contact.name}{' '}
    <button onClick={() => handleDelete(contact.id)}>Delete</button>
  </li>
))}

    </ul>
  );
};

export default ContactList;
