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
  const [currentData, setCurrentData] = useState(assaultData);
  const [currentCrimeName, setCurrentName] = useState('assault');

  return (
    <DetailsState>
      <div className='app'>
        <div className='app__map'>
          <MapComponent
            crimeData={currentData}
            currentCrimeName={currentCrimeName}
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBvjINMXRM7jTpqM80B2drht5CnaVfjcX0&callback=initMap'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div id='tooltip'></div>
        <div className='app__info'>
          <h1 className='app__title'>Toronto crime activity 2018</h1>
          <p className='app__description'>
            Based on{' '}
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
                onChange={() => {
                  setCurrentData(assaultData);
                  setCurrentName('assault');
                }}
                checked={currentData === assaultData}
              />
              <span>Assault</span>
            </div>
            <div className='app__choice'>
              {' '}
              <input
                type='radio'
                className='radioButton'
                onChange={() => {
                  setCurrentData(autoTheftData);
                  setCurrentName('auto-theft');
                }}
                checked={currentData === autoTheftData}
              />
              <span>Auto Theft</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => {
                  setCurrentData(breakAndEnterData);
                  setCurrentName('break-and-enter');
                }}
                checked={currentData === breakAndEnterData}
              />
              <span>Break & Enter</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => {
                  setCurrentData(homicideData);
                  setCurrentName('homicide');
                }}
                checked={currentData === homicideData}
              />
              <span>Homicide</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => {
                  setCurrentData(robberyData);
                  setCurrentName('robbery');
                }}
                checked={currentData === robberyData}
              />
              <span>Robbery</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => {
                  setCurrentData(theftOverData);
                  setCurrentName('theft-over');
                }}
                checked={currentData === theftOverData}
              />
              <span>Theft Over</span>
            </div>
          </div>
          <div className='info'>
            <span>
              Incidents <b>{currentData[currentCrimeName].length}</b>
            </span>
          </div>
          <br />
          <Details />
        </div>
      </div>
    </DetailsState>
  );
}

export default App;
