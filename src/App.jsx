import React from 'react';
import { Section } from 'components/Section';
export class App extends React.Component {
  state = {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Section title=""></Section>
      </div>
    );
  }
}
