import React from "react";
import resumeFile from '../../assets/images/LemusResume.pdf';

const Resume = () => (
  <div className="row about resume">
  <div  className="col s12 m12 l12 ">
    <div className="card aboutCard ">

      <div className="card-content">
      <h1 data-testid="h1tag">Resume</h1>
      <h4 classNAme="flow-text">Skills:</h4>
        <p className="aboutText flow-text">
        * HTML, CSS, Git, JavaScript, BootStrap, Materialize, jQuery, REST API, Node.js,
        Express.js, MongoDB, Mongoose, MySQL, Sequelize, Object Oriented Programming and more!
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