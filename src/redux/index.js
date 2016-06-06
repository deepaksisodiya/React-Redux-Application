/**
 * Created by deepaksisodiya on 06/06/16.
 */


import {combineReducers} from 'redux';
import {reducer as user} from './users';

export default combineReducers({
  user
});