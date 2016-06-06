/**
 * Created by deepaksisodiya on 06/06/16.
 */


import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './index';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export const store = createStoreWithMiddleware(rootReducer);