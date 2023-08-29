import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !phone) {
      alert('Please fill in all fields');
      return;
    }
    const contactExists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: uuidv4(), 
      name,
      phone,
    };

    dispatch(addContact(newContact));

    setName('');
    setPhone('');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className={styles.formInput}
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button className={styles.formButton} type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
