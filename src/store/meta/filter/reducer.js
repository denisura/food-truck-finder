import { initialState } from './selectors';

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
