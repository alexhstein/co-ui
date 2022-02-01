import React, { Component } from 'react';
import './MVP.css';

class ExclusivityButtons extends Component {
  constructor() {
    super();

    this.state = {
      color: 'red',
    };

    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    return (
      <div class="input_box">
        <label class="radio_button">
          <input
            type="radio"
            value="red"
            checked={this.state.color === 'red'}
            onChange={this.onRadioChange}
            style={{
              marginRight: 15,
              marginBottom: 10,
              fontSize: 20,
              padding: 40,
            }}
          />
          Exclusive
        </label>
        <label class="radio_button">
          <input
            type="radio"
            value="green"
            checked={this.state.color === 'green'}
            onChange={this.onRadioChange}
            style={{
              marginRight: 15,
              marginBottom: 10,
              fontSize: 20,
              padding: 40,
            }}
          />
          Co Exclusive with Netflix
        </label>
        <label class="radio_button">
          <input
            style={{
              marginRight: 15,
              marginBottom: 10,
              fontSize: 20,
              padding: 40,
            }}
            onChange={this.onRadioChange}
            type="radio"
            value="blue"
            checked={this.state.color === 'blue'}
          />
          Co Exclusive with with AVOD/SVOD Provider
        </label>
      </div>
    );
  }
}

export default ExclusivityButtons;
