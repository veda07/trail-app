
import React, { Component } from 'react';
import TrailContainer from './trailsContainer/TrailContainer';



class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
 
        <div >
          <h1>Trails App </h1>
          <TrailContainer/>

        </div>
    );
  }
}

export default App;
