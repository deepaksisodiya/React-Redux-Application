/**
 * Created by deepaksisodiya on 06/06/16.
 */


import React, {Component} from 'react';
import axios from 'axios';

class CreateEditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    if(props.params.userId) {
      this.getUser(props.params.userId)
    }
  }

  getUser(userId) {
    axios.get('http://localhost:3000/user/' + userId)
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.data.name,
          location: response.data.location
        });
      })
      .catch((response) => {
        console.log(response);
      });
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
    }).then((response) => {
      this.props.history.push('/')
    })
      .catch((response) => {
        console.log(response);
      });
  }

  editUser() {
    axios.put('http://localhost:3000/user/' + this.props.params.userId, {
      name: this.state.name,
      location: this.state.location
    })
      .then((response) => {
        console.log(response);
        this.props.history.push('/')
      })
      .catch((response) => {
        console.log(response);
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
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChangeForName.bind(this)} />
        <input type="text" placeholder="Location" value={this.state.location} onChange={this.handleChangeForLocation.bind(this)} />
        {this.props.params.userId ? <button onClick={this.editUser.bind(this)}>Update</button> : <button onClick={this.createUser.bind(this)}>Create</button>}
      </div>
    )
  }

}

export default CreateEditUser;