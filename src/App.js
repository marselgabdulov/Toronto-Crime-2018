import React from 'react';
import MyMap from './components/MyMap';
import './App.css';

function App() {
  return (
    <div className='App'>
      <MyMap
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBvjINMXRM7jTpqM80B2drht5CnaVfjcX0&callback=initMap'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
