/**
 * Created by deepaksisodiya on 01/05/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import CreateUser from './createUser';
import showUsers from './src/components/ShowUsers';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={showUsers}></Route>
    <Route path="/create" component={CreateUser}></Route>
    <Route path="/edit/:userId" component={CreateUser}></Route>
  </Router>
), document.getElementById('container'));