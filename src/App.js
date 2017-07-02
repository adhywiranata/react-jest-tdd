import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>REACT IS 4W350M3</h2>
        </div>
        <p className="App-intro">
          This app do nothing. Let's develop this app using TDD!
        </p>
      </div>
    );
  }
}

export default App;
