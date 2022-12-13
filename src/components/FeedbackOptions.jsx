import PropTypes from 'prop-types';
import React, { Component } from 'react';

export function FeedbackOptions({ options, onLeaveFeeback }) {
  return (
    <div>
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
}
