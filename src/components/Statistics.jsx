import PropTypes from 'prop-types';

export function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
}
