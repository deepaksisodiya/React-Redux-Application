/**
 * Created by deepaksisodiya on 01/05/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {getUsers} from './redux/users';

import {store} from './redux/store';

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
        <table>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
          {
            this.state.users && this.state.users.map((user) => {
              return <tr key={user.userId}>
                <td>{user.name}</td>
                <td>{user.location}</td>
              </tr>
            })
          }
        </table>
      </div>
    )
  }

}

ReactDOM.render(<Hello />, document.getElementById('container'));