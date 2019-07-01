// Code ControlledInput Component Here
import React, { Component } from 'react';

class ControlledInput extends Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }
  
    render() {
      return (
        <form>
        <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        </form>
      )
      }
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
}

export default ControlledInput;