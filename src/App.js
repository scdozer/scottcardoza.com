import React, { Component } from 'react';
import router from './router';

class App extends Component {
  render() {
    let colors = ['bg-gray-800', 'bg-green-900', 'bg-teal-900', 'bg-blue-900'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    return <div className={'App h-screen ' + color}>{router}</div>;
  }
}

export default App;
