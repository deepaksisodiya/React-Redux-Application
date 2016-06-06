/**
 * Created by deepaksisodiya on 01/05/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import CreateEditUser from './src/components/CreateEditUser';
import showUsers from './src/components/ShowUsers';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={showUsers}></Route>
    <Route path="/create" component={CreateEditUser}></Route>
    <Route path="/edit/:userId" component={CreateEditUser}></Route>
  </Router>
), document.getElementById('container'));