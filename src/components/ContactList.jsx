import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contactsArray, filterKey, removeItem }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        padding: '0',
      }}
    >
      {contactsArray
        .filter(contact => contact.name.toLowerCase().includes(filterKey))
        .map(contact => (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={removeItem}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filterKey: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};
