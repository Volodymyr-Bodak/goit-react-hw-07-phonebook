import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import styles from './ContactForm.module.css'; 

const ContactForm = () => {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({ name: '', phone: '', id: Date.now() });
  const [existingContactNames, setExistingContactNames] = useState([]);

  const contacts = useSelector((state) => state.contacts.items);
  useEffect(() => {
    const contactNames = contacts.map((contact) => contact.name);
    setExistingContactNames(contactNames);
  }, [contacts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (existingContactNames.includes(newContact.name)) {
      alert('Contact with the same name already exists!');
      return;
    }

    await dispatch(addContact(newContact));
    setNewContact({ name: '', phone: '', id: Date.now() });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newContact.name}
        onChange={handleInputChange}
        placeholder="Name"
        className={styles.formInput} 
      />
      <input
        type="text"
        name="phone"
        value={newContact.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        className={styles.formInput} 
      />
      <button type="submit" className={styles.formButton}>Add Contact</button> {/* Use the CSS module class */}
    </form>
  );
};

export default ContactForm;
