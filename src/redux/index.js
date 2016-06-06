/**
 * Created by deepaksisodiya on 06/06/16.
 */


import {combineReducers} from 'redux';
import {reducer as users} from './users';

export default combineReducers({
  users
});