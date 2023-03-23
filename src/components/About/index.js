import React from "react";
import Profile from "./pic_crop.jpg"

const About = () => (
  <div className="row about">
    <div  className="col s12 m12 l12 ">
      <div className="card aboutCard ">

      <div className="col s4 m3 l2">
        <img alt="Wendy Lemus profile" className="circle responsive-img profileImg" src={Profile}></img>
      </div>

        <div className="card-content">
        <h1 data-testid="h1tag">About Me</h1>
          
        </div>
      </div>
    </div>
  </div>
);

export default About;