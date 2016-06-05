/**
 * Created by deepaksisodiya on 01/05/16.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends Component {

  render() {
    return(
      <h1>Hello React</h1>
    )
  }

}

ReactDOM.render(<Hello />, document.getElementById('container'));