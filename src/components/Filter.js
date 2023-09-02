import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/phonebookSlice'; 
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
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
