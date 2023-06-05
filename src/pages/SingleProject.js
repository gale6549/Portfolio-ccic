import React from 'react';
import {useParams} from "react-router-dom";
import {ProjectList} from "../additional/ProjectList.js"
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/SingleProject.css";


function SingleProject() {
  const {id}=useParams();
  const project=ProjectList[id];
  return (
  <div className="project">
    <h1>{project.name}</h1>
    <img src={project.image} />
    <p><b>Skills:</b>{project.skills}</p>
    <p><b>Github link:</b>{project.github}</p>
    <p><b>Netlify link:</b>{project.netlify}</p>

  </div>
  );
}

export default SingleProject;