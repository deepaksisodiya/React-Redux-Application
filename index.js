/**
 * Created by deepaksisodiya on 01/05/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Hello extends Component {

  constructor(props) {
    super(props);
    axios.get('http://localhost:3000/users')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  render() {
    return(
      <h1>Hello React</h1>
    )
  }

}

ReactDOM.render(<Hello />, document.getElementById('container'));