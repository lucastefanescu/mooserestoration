import bricklayingpicture from "../pictures/mooserestorationbricklaying.jpeg";
import stoneinstallationpicture from "../pictures/mooserestorationrealstoneinstallation.jpeg";
import chimneyrepairpicture from "../pictures/mooserestorationchimneyrepair.jpeg";
import tuckpointingpicture from "../pictures/mooserestorationtuckpointing.jpeg";
import concreteworkpicture from "../pictures/mooserestorationconcretework.jpg";
import brickrepairpicture from "../pictures/mooserestorationbrickrepair.jpg";
import React from "react";

function About() {
	return (
		<>
			<div>
				<div>
					<h1></h1>
				</div>
				<div>
					<h2>Brick laying</h2>
					<img src={bricklayingpicture} alt="brick laying" />
					<h2>Stone Installation</h2>
					<img src={stoneinstallationpicture} />
					<h2>Chimney Repair</h2>
					<img src={chimneyrepairpicture} />
					<h2>Tuck Pointing</h2>
					<img src={tuckpointingpicture} />
					<h2>Concrete Work</h2>
					<img src={concreteworkpicture} />
					<h2>Brick repair</h2>
					<img src={brickrepairpicture} />
				</div>
			</div>
		</>
	);
}
export default About;
