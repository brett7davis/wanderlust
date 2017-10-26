import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="container-fluid black-background white-text">
        <header className="App-header">
          <img src={"tallinn0.png"} className = "App-logo" alt=""/>
          <h1 className='App-title'>Travels</h1>
        </header>
        <p className="App-intro">
          Tallinn </p>
        <p white-text>
          <img src={"tallinn1.png"} className = "App-picture thin-black-border" alt=""/>
          I went on a bus trip with Clarice, Pau, Miguel, and Mathilde through the Baltics.  
        </p> 
        <p className="App-intro">
          Helsinki
          </p>
          <p>
          <img src={"finlandia.png"} className = "App-picture thin-black-border" alt=""/>
          I spent a weekend in Helsinki with Jackie.  The picture is the Sibelius Monument.  
          We went on a rowboat nearby after taking this picture.
        </p>
        <p className ="App-intro">
        Budapest
        </p>
          <p>
        <img src={"buddy.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
        <p className="App-intro">
          Florence & Milan
          </p>
          <p>
          <img src={"flo.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
        <p className="App-intro">
          Bovec Valley
          </p>
          <p>
          <img src={"bov.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
        <p className="App-intro">
          Chilean Patagonia
          </p>
          <p>
          <img src={"chilli.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
      </div>
      </div>
    );
  }
}

export default App;
