import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactListItem from './ContactListItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <p>Loading...</p>
      ) : filteredContacts.length === 0 && !error ? (
        <p>The Phonebook is empty.</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;