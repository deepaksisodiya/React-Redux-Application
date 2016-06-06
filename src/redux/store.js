/**
 * Created by deepaksisodiya on 06/06/16.
 */


import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import rootReducer from './index';

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));