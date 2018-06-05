import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';
import reducers from 'reducers';

const middlewares = [reduxThunk, reduxPromise()];

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return <Provider store={store}>{children}</Provider>;
};
