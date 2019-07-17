import { combineReducers } from 'redux';

import statusReducer from './status/reducer';
import filterReducer from './filter/reducer';
import orderReducer from './order/reducer';
import paginationReducer from './pagination/reducer';

export default combineReducers({
  status: statusReducer,
  filter: filterReducer,
  order: orderReducer,
  pagination: paginationReducer,
});
