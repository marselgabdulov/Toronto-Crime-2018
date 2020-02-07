import React, { useReducer } from 'react';
import DetailsContext from './detailsContext';
import detailsReducer from './detailsReducer';

import { SHOW_DETAILS } from '../types';

const DetailsState = props => {
  const initialState = {
    details: {}
  };

  const [state, dispatch] = useReducer(detailsReducer, initialState);

  // Show crime details
  function showDetails(detailsObject) {
    dispatch({ type: SHOW_DETAILS, payload: detailsObject.object });
  }

  return (
    <DetailsContext.Provider value={{ details: state.details, showDetails }}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsState;
