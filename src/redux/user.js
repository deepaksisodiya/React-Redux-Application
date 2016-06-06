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
  return dispatch => {
    return axios.get('http://localhost:3000/users')
      .then((response) => {
        dispatch({type: ALL_USERS, data: response.data});
      })
      .catch((response) => {
        console.log(response);
      });
  }
};

export const deleteUser = (userId) => {
  return (dispatch, getState) => {
    return axios.delete('http://localhost:3000/user/' + userId)
      .then((response) => {
        let users = getState().user.users.filter((user) => {
          if(user.userId != userId) {
            return user;
          }
        });
        dispatch({type: ALL_USERS, data: users});
      })
      .catch((response) => {
        console.log(response);
      });
  }
};