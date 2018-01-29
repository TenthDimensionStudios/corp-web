import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <a id="menu-toggle" href="." class="btn btn-lg toggle visible-xs"><i class="fa fa-reorder"></i></a>
      

      </div>
    );
  }
}

export default App;
