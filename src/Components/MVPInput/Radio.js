import React, { Component } from 'react';

class Demo1 extends Component {
  constructor() {
    super();
    this.state = { name: 'react' };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event_one) {
    console.log(event_one.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <input type="radio" value="male" name="gender" /> Male
        <input type="radio" value="female" name="gender" /> Female
        <input type="radio" value="other" name="gender" /> Other
      </div>
    );
  }
}

export default Demo1;
