import React, { Component } from 'react';
import './work.css';

export default class Work extends Component {
  render() {
    return (
      <div className="content">
        <h2>EXPERIENCE</h2>
        <h3><a href="https://consumerfocusmarketing.com/" target="_blank" style={{textDecoration: 'none', fontWeight: '700'}}>Web Developer - Consumer Focus Marketing</a></h3>
          <p>Feb. 2016-Present.<br/>Custom Wordpress - HTML, PHP, JS.<br/> IT - Hosting, Email, Payments.</p>
        <br/>
        <h2>PERSONAL</h2>
        <a href="http://timewellwaste.online" target="_blank" style={{textDecoration: 'none'}}>TimeWellWasted.Online</a> - Headless Wordpress. ReactJs.<br/>
        <a href="http://responsiblyirresponsible.com" target="_blank" style={{textDecoration: 'none'}}>ResponsiblyIrresponsible.com</a> - ReactJS. NodeJS.
      </div>
    )
  }
}
