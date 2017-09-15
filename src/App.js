import React, { Component } from 'react';
import './App.css';
import Box from './components/Box.js';
import Iframe from './components/Iframe.js';


class App extends Component {
  render() {
    return (
      <div><Box/><Iframe/>
      </div>
    );
  }
}

export default App;
