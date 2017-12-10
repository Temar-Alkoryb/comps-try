import React, { Component } from 'react';
import Ant from './Ant';
import Semantic from './Semantic';
import Elemental from './Elemental';
//import Blueprint from './Blueprint';
//import Belle from './Belle';
//import ReactUI from './ReactUI';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="example-container">
        <Ant title="Ant" />
        <Semantic title="Semantic" />
        <Elemental title="Elemental" />
       {/* <Blueprint title="Blueprint" /> */}
       {/* <Belle title="Belle" /> */}
       {/* <ReactUI title="ReactUI" />*/}
      </div>

    );
  }
}

export default App;
