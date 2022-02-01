import React from 'react';

import './MVP.css';
import OptInputs from './OptInputs';
import PredictMethod from './PredictMethod';
import ContentInputs from './ContentInputs';
import OutputRow from './OutputRow';
import { rgb } from 'd3';

const MVPHome = () => {
  return (
    <div class="page_container">
      <div
        class="main_container"
        style={{ width: '500px', backgroundColor: rgb(240, 240, 240) }}
      >
        <h1 style={{ margin: 5, fontWeight: 'bold' }}>Inputs</h1>
        <PredictMethod />
        <OptInputs />
        <ContentInputs />
      </div>
      <div class="main_container" style={{ width: '900px' }}>
        <OutputRow year1="Year 1" />
        <OutputRow year1="Year 2" />
        <p1 style={{ display: 'flex', flex: 4 }} />
      </div>
    </div>
  );
};

export default MVPHome;
