import React, { Component } from 'react';

class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h1>I'm the parent component.</h1>
        <h3>
          <PersonComponent name="Winter" age={21} />
        </h3>
      </div>
    );
  }
}

export default ParentComponent;

const PersonComponent = (props) => {
  return (
    <div>
      <p>
        {props.name} - {props.age}
      </p>
    </div>
  );
};
