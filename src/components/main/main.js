import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="container mx-auto p-10 lg:p-40">
        <h1 className="text-6xl text-white font-bold leading-none">SCOTT<br/>CARDOZA</h1>
        <a className="text-white p-4 pl-1 text-2xl " rel="noopener noreferrer" href="https://github.com/scdozer/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a className="text-white p-4 text-2xl " rel="noopener noreferrer" href="https://www.linkedin.com/in/scott-cardoza-b5497974/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a className="text-white p-4 text-2xl " rel="noopener noreferrer" href="mailto:scottccardoza@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

        <p className="text-5xl text-gray-100 pt-20 font-bold">I make things for the web.</p>

        <p className="text-4xl text-gray-100 pt-20">Since Febuary 2015, I have been working at <a className="font-bold text-black" rel="noopener noreferrer" href="https://consumerfocusmarketing.com/" target="_blank">Consumer Focus Marketing</a> as a Web Developer. We do a lot with Wordpress.</p>

        <hr className="mt-20"/>

        <h2 className="text-6xl text-white pt-20 font-bold">Recent Brags:</h2>

        <p className="text-4xl text-gray-100 pt-20">I watch a lot of short videos and the ones I enjoyed can be found <a className="font-bold text-black" href="https://timewellwasted.online">here</a>. I made that site with Wordpress and React.</p>

        <p className="text-4xl text-gray-100 pt-20">I helped a friend <a className="font-bold text-black" href="https://droneopsco.com/" target="_blank" rel="noopener noreferrer">make this website</a> using Wordpress as a headless CMS using Gatsby and TailWindCSS.</p>

        <p className="text-4xl text-gray-100 pt-20">I have been playing with generative art in P5.js. You can see some of my doodles, <a className="font-bold text-black" href="https://localhost1000.glitch.me">here</a>. It's a resource hog.</p>

        <p className="text-4xl text-gray-100 pt-20">Alongside my friend, Brady, we made a tangible book alongside an app to play AR video with matching images, using Unity and Viewforia. <span className="text-2xl">Pictures/Video soon.</span></p>

        <p className="text-2xl text-gray-100 pt-40"> For more recent projects, check out my <a className="font-bold text-xl text-black" href="https://glitch.com/@scdozer">Glitch</a> or <a className="font-bold text-xl text-black" href="https://github.com/scdozer">GitHub</a>.</p>
        <p className="text-2xl text-gray-100"> If you want to work on a project, <a href="mailto:scottccardoza@gmail.com">email me</a>.</p>

      </div>
    )
  }
}
