import React from "react";
import Profile from "./pic_crop.jpg"
// import profilePic from './assets'

const About = () => (
  <div class="row about">
    <div  class="col s12 m12 l12 valign-wrapper">
      <div class="card aboutCard">

      <div class="col s4 m3 l2">
        <img class="circle responsive-img profileImg" src={Profile}></img>
      </div>

        <div class="card-content">
          <span class="card-title aboutTitle">About Me</span>
          <p class="aboutText flow-text">
            Welcome to my profile, my name is Wendy Lemus and I code as Elysiayn. I am currently developing my skills as a Full-Stack web developer at UCF Coding Boot-Camp.
            My journey began in October 2020 and while I am set to complete the program in April of 2021, I am excited to contine to be exposed to a variety of new and exciting 
            technology in the world of web development.
          </p>
          <p class="aboutText flow-text">
            I am a Florida based developer, with a great passion for fantasy related creative works. I am particularily found of table top games and am currently obsessed with Dungeon's 
            and Dragon's 5e. I am a nature enthusiast and take any oportunity I can get to expierence camping in Florida's beautiful state parks.
          </p>
          <p class="aboutText flow-text">
            Feel free to stop by my contact page to reach out to me for any inquiries! 
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;