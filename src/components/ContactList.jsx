import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, removeItem }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        padding: '0',
      }}
    >
      {contacts.map(contact => (
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};
