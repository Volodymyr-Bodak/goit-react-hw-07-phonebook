import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/phonebookSlice';

const Filter = () => {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Search Contacts"
    />
  );
};

export default Filter;
