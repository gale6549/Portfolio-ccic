import React from 'react';
import {VerticalTimeline, VerticalTimelineElement,
}from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="experience">
      <div className="Timeline"></div>
      <h1>Education</h1>
      <ol className="list">
        <li className="item">
          <h2> 2004-2011</h2>
          <span>Bachelor Degree in Architecture:KMITL,Bangkok,Thailand</span>
        </li>
        <li className="item">
          <h2>2022-2023</h2>
          <span>Diploma in Website and Mobile Application Development:Cornerstone Community International College,Vancouver,Canada</span>
        </li>
      </ol>
    </div>
      
  )
}

export default Experience