import * as React from "react";
import './App.css';

export default function App() {

  const wave = () => {

  }

  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        <span role="img" aria-label="Wave">👋</span> Hey there!
        </div>

        <div className="bio">
        I am Stephen and I'm a relationship coach and software developer. That's pretty awesome, right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
