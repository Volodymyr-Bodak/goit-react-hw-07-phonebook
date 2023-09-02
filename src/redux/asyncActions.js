import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
;

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, ) => {
  try {
    const response = await fetch(`https://64edeeac1f872182714208da.mockapi.io/contacts/contacts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
        const errorData = await response.json();
      throw new Error(`Error deleting contact: ${errorData.message}`);
    }

    return id;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
});

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('https://64edeeac1f872182714208da.mockapi.io/contacts/contacts');
  return response.data;
});


export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await axios.post('https://64edeeac1f872182714208da.mockapi.io/contacts/contacts', newContact);
  return response.data;
});


