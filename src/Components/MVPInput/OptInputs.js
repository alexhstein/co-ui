import React from 'react';
import './MVP.css';

function OptInputs() {
  return (
    <div class="input_box">
      <h2 style={{ fontWeight: 'bold' }}>Optimization Inputs</h2>
      <p class="input_header">Valuation Date</p>
      <input
        class="input_header"
        type="text"
        style={{ margin: 1, fontSize: '18px', padding: '7px' }}
      ></input>
      <p class="input_header">Estimated subscriber base (millions)</p>
      <input
        type="text"
        style={{ margin: 1, fontSize: '18px', padding: '7px' }}
      ></input>
    </div>
  );
}

export default OptInputs;
