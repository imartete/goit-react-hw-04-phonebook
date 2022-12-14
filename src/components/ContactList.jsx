import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contactsArray, filter, removeItem }) => {
  return (
    <ul>
      <ContactListItem
        contactsArray={contactsArray}
        filterKey={filter}
        removeListItemHandler={removeItem}
      />
    </ul>
  );
};
