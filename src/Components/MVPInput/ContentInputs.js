import React from 'react';
import './MVP.css';
import ExclusivityButtons from './ExclusivityButtons';
import DropButtons from './DropButtons';

function ContentInputs(props) {
  return (
    <div class="input_box" style={{ padding: '25px' }}>
      <h2 style={{ fontWeight: 'bold' }} red>
        Content Inputs
      </h2>
      <p class="input_header">Show-season combination(s)</p>
      <input
        type="text"
        style={{ margin: 1, fontSize: '18px', padding: '7px' }}
      ></input>
      <p class="input_header">Content exclusivity status</p>
      <ExclusivityButtons />
      <p class="input_header">Episode drop style</p>
      <DropButtons />
      <p class="input_header">Estimated marketing spend ($M)</p>
      <input
        type="text"
        style={{ margin: 1, fontSize: '18px', padding: '7px' }}
      ></input>
      <p class="input_header">Estimated linear marketing impressions</p>
      <input
        type="text"
        style={{ margin: 1, fontSize: '18px', padding: '7px' }}
      ></input>
      <div>
        <input
          type="checkbox"
          size={50}
          style={{
            margin: 20,
            fontSize: '3em',
          }}
        />
        New Release of same show after 12+ months?
      </div>
      <p class="input_header">Closest lookalike show-season</p>
      <input
        type="text"
        style={{ margin: 1, fontSize: '18px', padding: '7px' }}
      ></input>
    </div>
  );
}

export default ContentInputs;
