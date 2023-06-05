import React from 'react'

import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">

        <h2> My Name is Gale </h2>
        <div className="prompt">
          <p>
            An amature mobile application developer for volunteer and business.
          </p>
        </div>
      </div>
      <div className="skills"></div>
      <h1>Skills</h1>
      <ol classNAme="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>ReactJS,HTML,CSS</span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>MySQL,</span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>Javascript</span>
        </li>
      </ol>
    </div>
  )
}

export default Home;