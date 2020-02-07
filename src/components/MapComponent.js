import React, { useContext } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import 'mapbox-gl/dist/mapbox-gl.css';
import DetailsContext from '../context/details/detailsContext';

function MapComponent({ crimeData }) {
  const detailsContext = useContext(DetailsContext);
  const { showDetails } = detailsContext;

  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibWFycy1nYWJkdWxvdiIsImEiOiJjazZhb2t1eGgwNnVmM2xvZzUzbnpndHh1In0.268onGjsZnUr295iWoZzag';

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
      radiusMinPixels: 10,
      radiusMaxPixels: 12,
      getPosition: d => [d.long, d.lat],
      pickable: true,
      onHover: ({ object, x, y }) => {
        const el = document.getElementById('tooltip');
        if (object) {
          const { event_uniq_id } = object;
          el.style.display = 'block';
          el.style.opacity = 0.9;
          el.style.left = x + 'px';
          el.style.top = y + 'px';
          el.innerHTML = `<h3>ID: ${event_uniq_id}</h3><p>Click for more details</p>`;
        } else {
          el.style.opacity = 0.0;
        }
      },
      onClick: info => showDetails(info)
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
