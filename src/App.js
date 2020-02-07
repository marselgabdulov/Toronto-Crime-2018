import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import Details from './components/Details';
import './App.css';

import DetailsState from './context/details/DetailsState';

// Data
import assaultData from './data/assault.json';
import autoTheftData from './data/auto-theft.json';
import breakAndEnterData from './data/break-and-enter.json';
import homicideData from './data/homicide.json';
import robberyData from './data/robbery.json';
import theftOverData from './data/theft-over.json';

function App() {
  const [currentData, setCurrentData] = useState(homicideData);

  return (
    <DetailsState>
      <div className='app'>
        <div className='app__map'>
          <MapComponent
            crimeData={currentData}
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBvjINMXRM7jTpqM80B2drht5CnaVfjcX0&callback=initMap'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div id='tooltip'></div>
        <div className='app__info'>
          <h1 className='app__title'>Crime Toronto 2018</h1>
          <p className='app__description'>
            <a
              href='http://data.torontopolice.on.ca/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Toronto Police Service data
            </a>
          </p>
          <div className='app__choices'>
            <div className='app__choice'>
              {' '}
              <input
                type='radio'
                className='radioButton'
                onChange={() => setCurrentData(assaultData)}
                checked={currentData === assaultData}
              />
              <span>Assault</span>
            </div>
            <div className='app__choice'>
              {' '}
              <input
                type='radio'
                className='radioButton'
                onChange={() => setCurrentData(autoTheftData)}
                checked={currentData === autoTheftData}
              />
              <span>Auto Theft</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => setCurrentData(breakAndEnterData)}
                checked={currentData === breakAndEnterData}
              />
              <span>Break & Enter</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => setCurrentData(homicideData)}
                checked={currentData === homicideData}
              />
              <span>Homicide</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => setCurrentData(robberyData)}
                checked={currentData === robberyData}
              />
              <span>Robbery</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => setCurrentData(theftOverData)}
                checked={currentData === theftOverData}
              />
              <span>Theft Over</span>
            </div>
          </div>
          <div className='info'>
            <span>
              Incidents <b>{currentData.length}</b>
            </span>
          </div>
          <br />
          <h3>Incident description:</h3>
          <Details />
        </div>
      </div>
    </DetailsState>
  );
}

export default App;
