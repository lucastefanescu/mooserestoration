import bricklayingpicture from "../pictures/mooserestorationbricklaying.jpeg";
import stoneinstallationpicture from "../pictures/mooserestorationrealstoneinstallation.jpeg";
import chimneyrepairpicture from "../pictures/mooserestorationchimneyrepair.jpeg";
import tuckpointingpicture from "../pictures/mooserestorationtuckpointing.jpeg";
import concreteworkpicture from "../pictures/mooserestorationconcretework.jpg";
import brickrepairpicture from "../pictures/mooserestorationbrickrepair.jpg";

import Footer from "./Footer.jsx";

import "../styling/About.css";

import React from "react";

function About() {
	return (
		<>
			<div className="about-container">
				<div className="breaktitle services-title">
					<h1>SERVICES</h1>
				</div>
				<div className="about-cards-container">
					<div className="about-cards">
						<div className="about-me-card 1">
							<h2>Brick laying</h2>
							<img src={bricklayingpicture} alt="brick laying" />
						</div>
						<div className="about-me-card 2">
							<h2>Stone Installation</h2>
							<img src={stoneinstallationpicture} />
						</div>
						<div className="about-me-card 3">
							<h2>Chimney Repair</h2>
							<img src={chimneyrepairpicture} />
						</div>
						<div className="about-me-card 4">
							<h2>Tuck Pointing</h2>
							<img src={tuckpointingpicture} />
						</div>
						<div className="about-me-card 5">
							<h2>Concrete Work</h2>
							<img src={concreteworkpicture} />
						</div>
						<div className="about-me-card 6">
							<h2>Brick Repair</h2>
							<img src={brickrepairpicture} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
export default About;
