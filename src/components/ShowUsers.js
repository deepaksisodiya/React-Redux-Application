/**
 * Created by deepaksisodiya on 06/06/16.
 */


import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router'

import {getUsers} from '../redux/users';
import {store} from '../redux/store';

export default class Hello extends Component {

  constructor(props) {
    super(props);
    store.dispatch(getUsers());
    this.state = {
      users: store.getState().users.users || []
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      let users = store.getState().users.users;
      this.setState({
        users: users || []
      });
    });
  }

  deleteUser(userId) {
    axios.delete('http://localhost:3000/user/' + userId)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  editUser(userId) {
    this.props.history.push('/edit/' + userId);
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
        <h1>Hello React</h1>
        <ul>
          <li><Link to="/create">/create</Link></li>
        </ul>
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