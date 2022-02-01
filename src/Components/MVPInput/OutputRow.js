import React from 'react';
import './MVP.css';

function OutputRow({ year1, hello }) {
  const data = {
    Year1: {
      Acquisition: 100000,
      Viewership: 100000,
      Retention: 100000,
      Revenue: 100000,
      Adj_Revenue: 100000,
    },
    Year2: {
      Acquisition: 50000,
      Viewership: 50000,
      Retention: 50000,
      Revenue: 50000,
      Adj_Revenue: 50000,
    },
  };

  let data2 = {};

  if (year1 == 'Year 1') {
    data2 = data['Year1'];
  } else {
    {
      data2 = data['Year2'];
    }
  }

  return (
    <div>
      <h1 style={{ fontWeight: 'bold', margin: '20px' }}>{year1}</h1>
      <div class="main_container_col">
        <div class="out_cont">
          <p style={{ fontWeight: 'bold' }}>Acquisition</p>
          <p>{parseFloat(data2.Acquisition).toLocaleString()}</p>
        </div>
        <div class="out_cont">
          <p style={{ fontWeight: 'bold' }}>Viewership</p>
          <p>{parseFloat(data2.Viewership).toLocaleString()}</p>
        </div>
        <div class="out_cont">
          <p style={{ fontWeight: 'bold' }}>Retention</p>
          <p>{parseFloat(data2.Retention).toLocaleString()}</p>
        </div>
        <div class="out_cont">
          <p style={{ fontWeight: 'bold' }}>Revenue</p>
          <p>{'$' + parseFloat(data2.Revenue).toLocaleString()}</p>
        </div>
        <div class="out_cont">
          <p style={{ fontWeight: 'bold' }}>Adj. Revenue</p>
          <p>{'$' + parseFloat(data2.Adj_Revenue).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default OutputRow;
