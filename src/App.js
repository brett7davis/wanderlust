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
          I went on a bus trip with Clarice, Pau, Miguel, and Mathilde through the Baltics. 
        <p white-text> 
          <img src={"tallinn1.png"} className = "App-picture thin-black-border" alt=""/>
          
        </p> 
        <p className="App-intro">
          Helsinki
          </p>
          I spent a weekend in Helsinki with Jackie.  The picture is the Sibelius Monument.  
          We went on a rowboat nearby after taking this picture.
          <p>
          <img src={"finlandia.png"} className = "App-picture thin-black-border" alt=""/>
          
        </p>
        <p className ="App-intro">
        Budapest
        </p>
          I visited Dhamma and his friends in Hungary.  The pic is the escape room we got out of.  (im in gas mask)
          <p>
        <img src={"buddy.png"} className = "App-picture thin-black-border" alt=""/>
        </p>

        <p className="App-intro">
          Florence
          </p>
            I flew in to Milan, and then I took the train to Florence the following day. 
          <p>
          <img src={"flo.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
        <p className="App-intro">
          Bovec Valley
          </p>
          I went white water kayaking in Slovenia with a group from TU Berlin.
          <p> 
          <img src={"bov.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
        <p className="App-intro">
          Chilean Patagonia
          </p>
           I went sea kayaking with John Traendly, Eugina, Anna, and Brandi.
          <p> 
          <img src={"chilli.png"} className = "App-picture thin-black-border" alt=""/>
        </p>
      </div>
      </div>
    );
  }
}

export default App;
