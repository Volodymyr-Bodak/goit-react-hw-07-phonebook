import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64edeeac1f872182714208da.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts/contacts');
      console.log('fetchAll');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      console.log('addContact');
      const { data } = await axios.post('/contacts/contacts', contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idContact, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/contacts/${idContact}`);
      console.log('deleteContact');
      
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);