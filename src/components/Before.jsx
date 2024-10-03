import React, { useEffect, useState } from "react";
import "../styling/Before.css";
import image1 from "../pictures/slideshowimage1.jpg";
import image2 from "../pictures/slideshowimage2.jpg";

const images = [image1, image2, image1, image2];
const delay = 2500;

// function handleSlideButtonClick() {
// 	setIndex();
// }

//TODO: fix issues with slideshow
function Before() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {};
	}, [index]);

	return (
		<>
			<div className="slideshow-slider">
				<div
					className="current-slide"
					style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
				>
					{images.map((picture, idx) => (
						<img className="slide" key={idx} src={picture} />
					))}
				</div>
				<div className="dot-container">
					{images.map((_, idx) => (
						<div
							onClick={() => setIndex(idx)}
							key={idx}
							className={`dot ${index === idx ? "active" : ""}`}
						></div>
					))}
				</div>
			</div>
		</>
	);
}
export default Before;
