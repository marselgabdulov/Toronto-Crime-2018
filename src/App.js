import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import InfoComponent from './components/InfoComponent';
import './App.css';

// Data
import assaultData from './data/assault2018.json';
import autoTheftData from './data/auto-theft2018.json';
import breakAndEnterData from './data/break-and-enter2018.json';
import homicideData from './data/homicide2018.json';
import robberyData from './data/robbery2018.json';
import theftOverData from './data/theft-over2018.json';

function App() {
  const [currentData, setCurrentData] = useState(homicideData);

  return (
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
      <div className='app__info'>
        <h1 className='app__title'>Crime Toronto 2018</h1>
        <p className='app__description'>
          Data from Toronto Police Service{' '}
          <a
            href='http://data.torontopolice.on.ca/'
            target='_blank'
            rel='noopener noreferrer'
          >
            PUBLIC SAFETY DATA PORTAL
          </a>
        </p>
        <div className='app__choices'>
          <div className='app__choice'>
            {' '}
            <input
              type='radio'
              className='radioButton'
              onClick={() => setCurrentData(assaultData)}
              checked={currentData === assaultData}
            />
            <span>Assault</span>
          </div>
          <div className='app__choice'>
            {' '}
            <input
              type='radio'
              className='radioButton'
              onClick={() => setCurrentData(autoTheftData)}
              checked={currentData === autoTheftData}
            />
            <span>Auto Theft</span>
          </div>
          <div className='app__choice'>
            <input
              type='radio'
              className='radioButton'
              onClick={() => setCurrentData(breakAndEnterData)}
              checked={currentData === breakAndEnterData}
            />
            <span>Break & Enter</span>
          </div>
          <div className='app__choice'>
            <input
              type='radio'
              className='radioButton'
              onClick={() => setCurrentData(homicideData)}
              checked={currentData === homicideData}
            />
            <span>Homicide</span>
          </div>
          <div className='app__choice'>
            <input
              type='radio'
              className='radioButton'
              onClick={() => setCurrentData(robberyData)}
              checked={currentData === robberyData}
            />
            <span>Robbery</span>
          </div>
          <div className='app__choice'>
            <input
              type='radio'
              className='radioButton'
              onClick={() => setCurrentData(theftOverData)}
              checked={currentData === theftOverData}
            />
            <span>Theft Over</span>
          </div>
        </div>
        <InfoComponent crimeData={currentData} />
      </div>
    </div>
  );
}

export default App;
