/**
 * Created by deepaksisodiya on 06/06/16.
 */


import React, {Component} from 'react';
import axios from 'axios';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  createUser() {
    axios({
      method: 'post',
      url: 'http://localhost:3000/user',
      data: {
        name: this.state.name,
        location: this.state.location
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }

  handleChangeForName(e) {
    this.setState({name: e.target.value});
  }

  handleChangeForLocation(e) {
    this.setState({location: e.target.value});
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.name} onChange={this.handleChangeForName.bind(this)} />
        <input type="text" value={this.state.location} onChange={this.handleChangeForLocation.bind(this)} />
        <button onClick={this.createUser.bind(this)}>Create</button>
      </div>
    )
  }

}

export default CreateUser;