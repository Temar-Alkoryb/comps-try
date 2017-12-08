import React, { Component } from 'react';
import Ant from './Ant';
import Semantic from './Semantic';
import Elemental from './Elemental';
import ReactUI from './ReactUI';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="example-container">
        <Ant title="Ant" />
        <Semantic title="Semantic" />
        <Elemental title="Elemental" />
        <ReactUI title="ReactUI" />
      </div>

    );
  }
}

export default App;
