
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/phonebookSlice'; // Import both actions

const ContactForm = () => {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({ name: '', phone: '', id: Date.now() });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addContact(newContact));
    setNewContact({ name: '', phone: '', id: Date.now() });
    dispatch(fetchContacts()); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newContact.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="phone"
        value={newContact.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
