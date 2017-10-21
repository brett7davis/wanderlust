import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"tallinn0.png"} className = "App-logo" alt="logo"/>
          <h1 className='App-title'>Travels</h1>
        </header>
        <p className="App-intro">
          Tallinn
          <img src={"tallinn1.png"} className = "App-picture" alt=""/>
        </p> 
        <p className="App-intro">
          Helsinki
          <img src={"finlandia.png"} className = "App-picture" alt=""/>
        </p>
        <p className ="App-intro">
        Budapest
        <img src={"buddy.png"} className = "App-picture" alt=""/>
        </p>
        <p className="App-intro">
          Florence
          <img src={"flo.png"} className = "App-picture" alt=""/>
        </p>
        <p className="App-intro">
          Bovec
          <img src={"bov.png"} className = "App-picture" alt=""/>
        </p>
        <p className="App-intro">
          Patagonia
          <img src={"chilli.png"} className = "App-picture" alt=""/>
        </p>
      </div>
    );
  }
}

export default App;
