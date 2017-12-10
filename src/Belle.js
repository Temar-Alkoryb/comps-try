import React, { Component } from 'react';
const belle = require('belle');

const TextInput = belle.TextInput;

class Belle extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <TextInput title={this.props.title} defaultValue="Hello from Belle" />
    );
  }
}

export default Belle;
