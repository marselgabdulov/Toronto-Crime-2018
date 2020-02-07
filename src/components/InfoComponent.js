import React from 'react';

function InfoComponent({ crimeData }) {
  return (
    <div className='info'>
      <span>Incidents {crimeData.length}</span>
    </div>
  );
}

export default InfoComponent;
