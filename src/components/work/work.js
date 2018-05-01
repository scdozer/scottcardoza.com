import React, { Component } from 'react';
import './work.css';

export default class Work extends Component {
  render() {
    return (
      <div className="content">
        <h2>EXPERIENCE</h2>
        <hr></hr>
        <h3>CONSUMER FOCUS MARKETING</h3>
        <p>Web Developer. Feb. 2016-Present. <a href="http://consumerfocusmarketing.com/" target="_blank">Visit Site.</a></p>

        <ul>
          <li><a href="https://nhsaveswithoil.com/" target="_blank">NH Saves With Oil</a> - Custom Wordpress.</li>
          <li><a href="http://easternenergyexpo.com/" target="_blank">Eastern Energy Expo</a> - Custom Wordpress. </li>
          <li><a href="http://mpproperties.net/" target="_blank">Murray Custom Properties</a> - Custom Wordpress.</li>
          <li><a href="http://snowshomeandgarden.com/" target="_blank">Snows Home and Garden</a> - Custom Wordpress. E-Commerce.</li>
          <li><a href="http://papetroleum.org/" target="_blank">PA Petroleum Association</a> - Custom Wordpress.</li>
        </ul>


        <hr></hr>
        <h3>PERSONAL PROJECTS</h3>
        <ul>
          <li><a href="https://chipinfore.com" target="_blank">Chip In Fore</a> - Custom Wordpress. E-Commerce.</li>
          <li><a href="http://timewellwaste.online" target="_blank">TimeWellWasted.Online</a> - Headless Wordpress. ReactJs. </li>
          <li><a href="https://housebnb-finished.herokuapp.com/" target="_blank">HouseBnB</a> - ReactJs. Redux. NodeJs. Express.</li>
        </ul>
      </div>
    )
  }
}
