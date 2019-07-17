import { initialState } from './selectors';
import { SUCCESS, REQUEST, FAILURE, OK, LOADING, ERROR } from '../../constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return OK;
    case REQUEST:
      return LOADING;
    case FAILURE:
      return ERROR;
    default: {
      return state;
    }
  }
};
