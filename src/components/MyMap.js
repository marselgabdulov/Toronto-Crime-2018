import React from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';

import assaultData from '../data/assault2018.json';
import autoTheftData from '../data/auto-theft2018.json';
import breakAndEnterData from '../data/break-and-enter2018.json';
import homicideData from '../data/homicide2018.json';
import robberyData from '../data/robbery2018.json';
import theftOverData from '../data/theft-over2018.json';

function MyMap() {
  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibWFycy1nYWJkdWxvdiIsImEiOiJjazZhb2t1eGgwNnVmM2xvZzUzbnpndHh1In0.268onGjsZnUr295iWoZzag';

  // Initial viewport settings
  const initialViewState = {
    longitude: -79.407884,
    latitude: 43.724132,
    zoom: 11,
    pitch: 0,
    bearing: 0
  };

  const layers = [
    new ScatterplotLayer({
      id: 'scatter',
      data: robberyData,
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 5,
      getPosition: d => [d.long, d.lat],
      getFillColor: d =>
        d.premisetype === 'Outside' ? [200, 0, 40, 150] : [255, 140, 0, 100]
    })
  ];
  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}

export default MyMap;
