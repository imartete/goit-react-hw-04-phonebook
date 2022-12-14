import PropTypes from 'prop-types';

export const ContactListItem = ({
  contactsArray,
  filterKey,
  removeListItemHandler,
}) => {
  return contactsArray
    .filter(contact => contact.name.toLowerCase().includes(filterKey))
    .map(el => (
      <li key={el.id} data-id={el.id} id={el.id}>
        {el.name}: {el.number}
        <button type="remove" onClick={removeListItemHandler}>
          Delete
        </button>
      </li>
    ));
};
