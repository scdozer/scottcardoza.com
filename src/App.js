import React, { Component } from 'react';
import Nav from './components/nav/nav';
import Video from './components/video/video';
import router from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
            <Nav />
            {router}
          </div>
          <Video />
      </div>
    );
  }
}

export default App;
