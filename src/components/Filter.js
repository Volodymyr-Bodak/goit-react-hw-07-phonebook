import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
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
