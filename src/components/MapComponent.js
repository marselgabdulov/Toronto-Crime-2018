import React from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapComponent({ crimeData }) {
  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibWFycy1nYWJkdWxvdiIsImEiOiJjazZhb2t1eGgwNnVmM2xvZzUzbnpndHh1In0.268onGjsZnUr295iWoZzag';

  // Initial viewport settings
  const initialViewState = {
    longitude: -79.297986,
    latitude: 43.710172,
    zoom: 10.5,
    pitch: 0,
    bearing: 0
  };

  function scatterplotLayer(data) {
    return new ScatterplotLayer({
      id: 'scatter',
      data: data,
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 5,
      getPosition: d => [d.long, d.lat],
      getFillColor: d =>
        d.premisetype === 'Outside' ? [200, 0, 40, 150] : [255, 140, 0, 100]
    });
  }

  function heatmapLayer(data) {
    return new HeatmapLayer({
      id: 'heat',
      data: data,
      getPosition: d => [d.long, d.lat],
      getWeight: 60,
      radiusPixels: 60
    });
  }

  const layers = [scatterplotLayer(crimeData), heatmapLayer(crimeData)];
  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <StaticMap
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/dark-v8'
      />
    </DeckGL>
  );
}

export default MapComponent;
