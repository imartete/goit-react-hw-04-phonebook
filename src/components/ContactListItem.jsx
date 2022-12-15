import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li
      id={id}
      style={{
        display: 'flex',
        gap: '5px',
      }}
    >
      {name}: {number}
      <button type="remove" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
