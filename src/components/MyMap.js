import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const MyMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 43.7673149, lng: -79.448812 }}
    ></GoogleMap>
  ))
);

export default MyMap;
