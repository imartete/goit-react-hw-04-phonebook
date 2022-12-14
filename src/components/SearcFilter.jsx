import PropTypes from 'prop-types';

export const Filter = ({ searchItemHandler, filter }) => {
  return (
    <input
      type="search"
      name="search"
      onChange={searchItemHandler}
      value={filter}
    ></input>
  );
};

Filter.propTypes = {
  searchItemHandler: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
