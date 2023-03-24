import React from "react";
import Profile from "./pic_crop.jpg";

const About = () => (
	<div className="row about">
		{/* content responsiveness */}
		<div className="col">
			{/* entire about content */}
			<div className="card-panel aboutCard">
				{/* img and title container */}
				<div className="aboutTitle">
					<div className="col s4 m4 l2 ">
						<img
							alt="Wendy Lemus profile headshot"
							className="circle responsive-img"
							src={Profile}
						></img>
					</div>

					<div className="col s8 m8 l10">
						<h1>Behind the Code:</h1>
					</div>

					{/* END img and title */}
				</div>

				{/* about text */}
				<div className="card-content">
					<p className="aboutText flow-text">
						I am a self-proclaimed advid life-long
						programming student, my current endevours
						continue in pursuit of cultivating my skills as
						a full-stack web application developer. While my
						journey officially began in October 2020, I
						ensure to maintain up to date on new and current
						technologogies, while also developing new
						skills. Which, most recently has also led me to
						explore the wonderful programming language that
						is Java!
					</p>
					<p className="aboutText flow-text">
						I am a Florida based developer, with a great
						passion for fantasy related creative works. I am
						particularily fond of table top games and am
						currently obsessed with Dungeon's & Dragon's 5e.
						I am a nature enthusiast and take any oportunity
						I can get to expierence camping in Florida's
						beautiful state parks. Slowly getting better at
						hiking to eventually take it to the level of
						backpacking! Known to show pictures of my cat
						without warning.
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
