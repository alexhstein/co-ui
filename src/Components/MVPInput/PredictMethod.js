import React from 'react';
import './MVP.css';
import MethodButtons from './MethodButtons';

function PredictMethod(props) {
  return (
    <div class="input_box">
      <h2 style={{ fontWeight: 'bold' }}>Prediction Method</h2>
      <MethodButtons />
    </div>
  );
}

export default PredictMethod;
