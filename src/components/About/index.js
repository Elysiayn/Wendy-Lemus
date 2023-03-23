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
        <p className="aboutText flow-text">
            As a self-proclaimed life-long programming student, my current endevours continue in pursuit of cultivating my skills as a full-stack web application developer.
            While my journey officially began in October 2020, I ensure to maintain up to date on new and current technologogies, while also developing new skills. Which, most recently
            has also led me to explore the wonderful programming language that is Java! 
          </p>
          <p className="aboutText flow-text">
            I am a Florida based developer, with a great passion for fantasy related creative works. I am particularily fond of table top games and am currently obsessed with Dungeon's 
            & Dragon's 5e. I am a nature enthusiast and take any oportunity I can get to expierence camping in Florida's beautiful state parks. Slowly getting better at hiking to eventually 
            take it to the level of backpacking! Known to show pictures of my cat without warning. 
          </p>
          <p className="aboutText flow-text">
            Feel free to stop by my contact page and reach out to me for any inquiries! 
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;