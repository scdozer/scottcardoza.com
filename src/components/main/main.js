import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="container mx-auto p-10 lg:p-40">
        <h1 className="text-6xl text-white font-bold leading-none">
          scott cardoza
        </h1>
        <a
          className="text-white p-4 text-2xl "
          rel="noopener noreferrer"
          href="mailto:scottccardoza@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>

        <p className="text-4xl text-gray-100 pt-10 font-bold">
          software developer
        </p>

        <p className="text-3xl text-gray-100 pt-0">
          currently coding alongside an all time crew at{' '}
          <a
            className="font-bold text-black"
            rel="noopener noreferrer"
            href="https://impossible-bureau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impossible Bureau
          </a>
          .
        </p>

        <h2 className="text-3xl text-white pt-20 font-bold">tings:</h2>

        <p className=" text-gray-100 ">
          <a className="font-bold text-black" href="https://github.com/scdozer">
            github
          </a>
        </p>

        <p className=" text-gray-100 ">
          <a
            className="font-bold text-black"
            href="mailto:scottccardoza@gmail.com"
          >
            email
          </a>
        </p>

        <p className=" text-gray-100 ">
          <a
            className="font-bold text-black"
            href="https://timewellwasted.online"
          >
            tww
          </a>
        </p>
      </div>
    );
  }
}
