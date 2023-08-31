import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || phone.trim() === '') {
      return;
    }

    const isContactExists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isContactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.formInput}
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        className={styles.formInput}
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button type="submit" className={styles.formButton}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
