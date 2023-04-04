import React from "react";
import imgProfile from "../../assets/images/profile.jpg";

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
						<h1>Take a look around!</h1>
					</div>

					{/* <div className="aboutTitle col s8 m8 l10"> */}

					<div className="aboutTitle col s4 m4 l4">
						<img
							alt="Wendy Lemus profile headshot"
							className="circle responsive-img"
							src={imgProfile}
						></img>
					</div>
					{/* END img and title */}
				</div>

				{/* about text */}
				<div className="card-content">
					<p className="aboutText flow-text">
						Thanks for stopping by! This page is developed
						and maintained by a spirited programming
						student, Wendy Lemus. While my coding journey
						officially began in October 2020, my current
						endeavors continue to be in pursuit of
						cultivating my skills as an aspiring full-stack
						web application developer. I ensure to strive to
						maintain current on technologies relevant in the
						industry, while also developing new skills.
						Most recently this has also led me to explore
						the wonderful programming language that is Java!
						Additionally, this summer of 2023 I am beginning
						my progress toward a second Bachelor's degree at
						Arizona State University for software
						engineering. I am excited to actively apply my
						skills and further grow in this innovative
						industry.
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
						to the level of backpacking! I'm known to show
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
