// @flow

// Dependencies
import React from 'react';
import { Link } from 'react-router';

// CSS/Assets
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <div className="App-intro">
        <h1>Welcome to React PWA</h1>
        <Link className="btn" to="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
