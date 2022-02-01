import React, { Component } from 'react';

class RadioButton extends React.Component {
  render(text_one) {
    const greeting = 'Welcome to React';
    return (
      <div>
        <input type="radio" style={{ margin: 10 }}></input>
        {this.props.greeting}
      </div>
    );
  }
}

export default RadioButton;
