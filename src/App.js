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
  const [currentResult, setCurrentResult] = useState(currentData);
  const [currentCrimeName, setCurrentCrimeName] = useState('assault');
  const [currentPremisesList, setCurrentPremisesList] = useState([
    'Outside',
    'Apartment',
    'House',
    'Commercial',
    'Other'
  ]);

  function handleState(data, name) {
    setCurrentData(data);
    setCurrentResult(data);
    setCurrentCrimeName(name);
    setCurrentPremisesList(
      name === 'homicide'
        ? ['Shooting', 'Stabbing', 'Other']
        : ['Outside', 'Apartment', 'House', 'Commercial', 'Other']
    );
  }

  function filterDataByPremisetype(premisetype) {
    setCurrentResult(currentData);
    let filteredData = currentData[currentCrimeName].filter(
      incident => incident.premisetype === premisetype
    );

    setCurrentResult({ [currentCrimeName]: filteredData });
  }

  return (
    <DetailsState>
      <div className='app'>
        <div className='app__map'>
          <MapComponent
            crimeData={currentResult}
            currentCrimeName={currentCrimeName}
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
                onChange={() => handleState(assaultData, 'assault')}
                checked={currentCrimeName === 'assault'}
              />
              <span>Assault</span>
            </div>
            <div className='app__choice'>
              {' '}
              <input
                type='radio'
                className='radioButton'
                onChange={() => handleState(autoTheftData, 'auto-theft')}
                checked={currentCrimeName === 'auto-theft'}
              />
              <span>Auto Theft</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() =>
                  handleState(breakAndEnterData, 'break-and-enter')
                }
                checked={currentCrimeName === 'break-and-enter'}
              />
              <span>Break & Enter</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => handleState(homicideData, 'homicide')}
                checked={currentCrimeName === 'homicide'}
              />
              <span>Homicide (Murder)</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => handleState(robberyData, 'robbery')}
                checked={currentCrimeName === 'robbery'}
              />
              <span>Robbery</span>
            </div>
            <div className='app__choice'>
              <input
                type='radio'
                className='radioButton'
                onChange={() => handleState(theftOverData, 'theft-over')}
                checked={currentCrimeName === 'theft-over'}
              />
              <span>Theft Over</span>
            </div>
          </div>
          <div className='app__filter'>
            {currentPremisesList.map((premise, index) => (
              <button
                key={index}
                onClick={() => filterDataByPremisetype(premise)}
                className='filter-button'
              >
                {premise}
              </button>
            ))}
            <button
              onClick={() => setCurrentResult(currentData)}
              className='filter-button'
            >
              All
            </button>
          </div>
          <br />
          <div className='info'>
            <span>
              Incidents <b>{currentResult[currentCrimeName].length}</b>
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
