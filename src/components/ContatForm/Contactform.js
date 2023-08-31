import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    const newContact = { name, phone };
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
