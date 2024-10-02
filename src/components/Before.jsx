import React from "react";
import "../styling/Before.css";
import image1 from "../pictures/slideshowimage1.jpg";
import image2 from "../pictures/slideshowimage2.jpg";

const images = [image1, image2];

function Before() {
	return (
		<>
			<div className="slideshow-slider">
				<div className="current-slide">
					{images.map((picture, idx) => (
						<img className="slide" key={idx} src={picture} />
					))}
				</div>
			</div>
		</>
	);
}
export default Before;
