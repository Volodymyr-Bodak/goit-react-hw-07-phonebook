import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ contact,}) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
