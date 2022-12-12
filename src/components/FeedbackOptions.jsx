import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default ({ options, onLeaveFeeback }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button" id="good" onClick={onLeaveFeeback}>
        Good
      </button>
      <button type="button" id="neutral" onClick={onLeaveFeeback}>
        Neutral
      </button>
      <button type="button" id="bad" onClick={onLeaveFeeback}>
        Bad
      </button>
    </div>
  );
};
