import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
          <h1 className="title"><Link to='/'>SCOTT<br></br><span>CARDOZA</span></Link></h1>
        <div className="navLinks">
          <Link to='/experience'>Experience </Link>
          <Link to='/'>About </Link>
        </div>
      </div>
    )
  }
}
