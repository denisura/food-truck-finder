import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

import reducers from './reducers';
import sagas from './sagas';

const configureStore = (initialState, services = {}) => {
  const sagaMiddleware = createSagaMiddleware({
    context: services,
  });

  const enhancers = [applyMiddleware(sagaMiddleware)];

  const store = createStore(
    combineReducers(reducers),
    initialState,
    compose(...enhancers)
  );
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
