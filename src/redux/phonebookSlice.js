import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://64edeeac1f872182714208da.mockapi.io/contacts/contacts');
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, { rejectWithValue }) => {
  try {
    const response = await fetch('https://64edeeac1f872182714208da.mockapi.io/contacts/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });

    if (!response.ok) {
      throw new Error('Failed to add contact');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://64edeeac1f872182714208da.mockapi.io/contacts/contacts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }

    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { updateFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
