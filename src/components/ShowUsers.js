/**
 * Created by deepaksisodiya on 06/06/16.
 */


import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router'

import {getUsers, deleteUser} from '../redux/user';
import {store} from '../redux/store';

export default class ShowUsers extends Component {

  constructor(props) {
    super(props);
    store.dispatch(getUsers());
    this.state = {
      users: store.getState().user.users || []
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      let users = store.getState().user.users;
      this.setState({
        users: users || []
      });
    });
  }

  deleteUser(userId) {
    store.dispatch(deleteUser(userId));
  }

  editUser(userId) {
    this.props.history.push('/edit/' + userId);
  }

  goToCreate() {
    this.props.history.push('/create');
  }

  render() {
    return(
      <div>
        <style>{`
        table, th, td{
          border: 1px solid black;
          border-collapse: collapse;
        }
        th, td {
            padding: 8px;
        }
        `}</style>
        <h1>React Redux Application</h1>
        <button style={{marginBottom: '10px'}} onClick={this.goToCreate.bind(this)}>Create User</button>
        <table>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
          {
            this.state.users && this.state.users.map((user) => {
              return <tr key={user.userId}>
                <td>{user.name}</td>
                <td>{user.location}</td>
                <td><a onClick={() => {this.deleteUser(user.userId)}} >Delete</a></td>
                <td><a onClick={() => {this.editUser(user.userId)}} >Edit</a></td>
              </tr>
            })
          }
        </table>
      </div>
    )
  }

}