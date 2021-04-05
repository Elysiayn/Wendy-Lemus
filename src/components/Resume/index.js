import React from "react";
import resumeFile from '../../assets/images/Resume.pdf';

const Resume = () => (
  <div className="row about resume">
  <div  className="col s12 m12 l12 ">
    <div className="card aboutCard ">

      <div className="card-content">
      <h1 data-testid="h1tag">Resume</h1>
      <h4 className="flow-text">Languages:</h4>
        <p className="aboutText flow-text">
        * JavaScript, HTML5, CSS, JSON
        </p>
      <h4 className="flow-text">Database:</h4>
        <p className="aboutText flow-text">
        * MySQL, MongoDB
        </p>
      <h4 className="flow-text">Tools:</h4>
        <p className="aboutText flow-text">
        * Sequelize, SQLite, Express.js, jQuery, FireBase Storage, GraphQL, Mongoose, Node.js, React, Regex, Stripe, Redux
        </p>
      <h4 className="flow-text">Other:</h4>
        <p className="aboutText flow-text">
        * Heroku, Git Bash, GitHub, Microsoft Office
        </p>
        <div class="card-action center teal darken-2">
        <a href={resumeFile} download={resumeFile}>Download Resume</a>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Resume;