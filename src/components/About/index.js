import React from "react";
import Profile from "./pic_crop.jpg";

const About = () => (
	<div className="row about">
		{/* content responsiveness */}
		<div className="col">
			{/* entire about content */}
			<div className="card-panel aboutCard">
				{/* img and title container */}
				<div className="aboutHeader">
					{/* <div className="aboutTitle col s4 m4 l2 "> */}

					<div className="aboutTitle col s8 m8 l8">
						<h1>Behind the Code:</h1>
					</div>

					{/* <div className="aboutTitle col s8 m8 l10"> */}

					<div className="aboutTitle col s4 m4 l4">
						<img
							alt="Wendy Lemus profile headshot"
							className="circle responsive-img"
							src={Profile}
						></img>
					</div>
					{/* END img and title */}
				</div>

				{/* about text */}
				<div className="card-content">
					<p className="aboutText flow-text">
						I am a self-proclaimed avid life-long
						programming student! My current endeavors
						continue in pursuit of cultivating my skills as
						a full-stack web application developer. While my
						journey officially began in October 2020, I
						ensure to maintain up to date on new and current
						technologies, while also developing new skills.
						Which, most recently has also led me to explore
						the wonderful programming language that is Java!
					</p>
					<p className="aboutText flow-text">
						I am a Florida-based developer, with a great
						passion for fantasy-related creative works and
						activities. I am particularly fond of tabletop
						games and am currently obsessed with Dungeons &
						Dragons 5e. I am a nature enthusiast and take
						any opportunity I can get to experience camping
						in Florida's beautiful state parks. Slowly
						getting better at hiking to eventually take it
						to the level of backpacking! Known to show
						pictures of my cat without warning.
					</p>
					<p className="aboutText flow-text">
						Feel free to stop by my contact page and reach
						out to me for any inquiries!
					</p>
					{/* END text */}
				</div>

				{/* END about content  */}
			</div>

			{/* END col div */}
		</div>

		{/* END row about div */}
	</div>

	// no div beyond
);

export default About;
