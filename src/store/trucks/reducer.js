import { initialState } from './selectors';
import { SUCCESS, MORE } from '../constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS: {
      return action.data;
    }
    case MORE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
