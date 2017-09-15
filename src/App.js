import React, { Component } from 'react';
import './App.css';
import Box from './components/Box.js';
import Iframe from './components/Iframe.js';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>MY PLAYLIST</div>
        <div className='inputContainer'>
        
        <div className='inputVideo'><Iframe/></div>
        <div className='inputBox'><Box/></div>
          
        </div>
      </div>      
    );
  }
}

export default App;
