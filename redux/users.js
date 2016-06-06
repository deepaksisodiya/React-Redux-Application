/**
 * Created by deepaksisodiya on 06/06/16.
 */


import axios from 'axios';

const ALL_USERS = 'ALL_USERS';

export function reducer(state = {}, action) {
  switch(action.type) {
    case ALL_USERS:
      return Object.assign({}, state, {users: action.data});
    default:
      return state;
  }
}

export const getUsers = () => {
  axios.get('http://localhost:3000/users')
    .then((response) => {
      console.log(response);
      dispatch({type: ALL_USERS, data: response.data});
    })
    .catch((response) => {
      console.log(response);
    });
};