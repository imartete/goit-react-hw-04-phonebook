import { Section } from 'components/Section.jsx';
// import { FeedbackOptions } from 'components/FeedbackOptions.jsx';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      {/* <Section title="">
     <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
      <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
    </Section> */}
      {/* <Statistics good={0} neutral={0} bad={0}></Statistics> */}
      <Section title="Please leave feedback" />
    </div>
  );
};
