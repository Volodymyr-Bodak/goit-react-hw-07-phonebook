import { configureStore } from '@reduxjs/toolkit';
import persistedPhonebookReducer from './phonebookSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: persistedPhonebookReducer,
  },
});

export const persistor = persistStore(store);
