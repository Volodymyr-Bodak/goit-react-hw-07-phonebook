import React from 'react';

import ContactForm from './ContatForm/Contactform';
import ContactList from './Contactlist';
import Filter from './Filter';


const Phonebook = () => {
  return (
   
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
   
  );
};

export default Phonebook;
