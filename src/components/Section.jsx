import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class Section extends React.Component {
  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   positivePercentage: 0,
  // };

  // static propTypes = {
  //   good: PropTypes.number,
  //   neutral: PropTypes.number,
  //   bad: PropTypes.number,
  //   total: PropTypes.number,
  //   positivePercentage: PropTypes.number,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeeback = event => {
    const { target } = event;
    let clickedBtn = target.id;

    switch (clickedBtn) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
    }
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedbackOptions
          options={this.state}
          onLeaveFeeback={this.onLeaveFeeback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={0}
          positivePercentage={1}
        />
      </div>
    );
  }
}

// Profile.propTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.object,
// };
