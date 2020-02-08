import React, { useContext } from 'react';
import DetailsContext from '../context/details/detailsContext';
import './Details.css';

function Details() {
  const detailsContext = useContext(DetailsContext);
  const { details } = detailsContext;

  return (
    <div className='details'>
      <h3>Incident description:</h3>
      <span>
        ID: <b> {details.event_uniq_id}</b>
      </span>
      <span>
        Date and time:{' '}
        <b>
          {' '}
          {details.occurrencedate &&
            `${
              details.occurrencedate.split('T')[0]
            } ${details.occurrencedate.split('T')[1].substring(0, 5)}`}
        </b>
      </span>
      <span>
        Division: <b> {details.division}</b>
      </span>
      <span>
        Near: <b> {details.neighbourhood}</b>
      </span>
      <span>
        Type: <b> {details.premisetype}</b>
      </span>
    </div>
  );
}

export default Details;
