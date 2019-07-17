import { initialState } from './selectors';
import { MORE, SUCCESS } from '../../constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS: {
      const hasMore = action.hasMore;
      return { ...state, hasMore };
    }
    case MORE: {
      const offset = state.offset + state.limit;
      return { ...state, offset };
    }
    default: {
      return { ...initialState, ...state };
    }
  }
};
