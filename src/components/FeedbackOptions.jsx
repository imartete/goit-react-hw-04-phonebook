import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeeback }) => {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button type="button" key={key} id={key} onClick={onLeaveFeeback}>
          {key[0].toUpperCase() + key.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeeback: PropTypes.func.isRequired,
};
