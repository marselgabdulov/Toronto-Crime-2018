import { SHOW_DETAILS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return {
        details: action.payload
      };
    default:
      return state;
  }
};
