import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const Hello = ({ name }) => `Hello ${name}`;

function simpleHOC(Wrap) {
  return class extends React.Component {
    render() {
      return <Wrap name="simpleHoc19" {...this.props} />;
    }
  };
}

const App = () => {
  return <NewComponent />;
};

const NewComponent = simpleHOC(Hello);

render(<App />, document.getElementById('root'));
