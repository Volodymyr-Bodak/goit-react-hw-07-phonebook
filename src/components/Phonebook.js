import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './ContatForm/Contactform';
import ContactList from './Contactlist';
import Filter from './Filter';
import { persistor } from 'redux/store';

const Phonebook = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </PersistGate>
  );
};

export default Phonebook;
