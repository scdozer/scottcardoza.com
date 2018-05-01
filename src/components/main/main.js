import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="content">
        <h2><span>I AM A</span> WEB DEVELOPER.</h2>
        <p>HTML. SCSS. PHP. WORDPRESS. JAVASCRIPT. NODE. REACT. GIT. ADOBE SUITE.</p>
        <a className="social" href="https://github.com/scdozer/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a className="social" href="https://www.linkedin.com/in/scott-cardoza-b5497974/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a className="social" href="https://www.instagram.com/dozeydozerr/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a className="social" href="mailto:scott@scottcardoza.com" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
      </div>
    )
  }
}
