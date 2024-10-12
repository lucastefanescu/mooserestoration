import React, { useEffect, useState, useRef } from "react";
import "../styling/Before.css";
import image1 from "../pictures/slideshowimage1.jpg";
import image2 from "../pictures/slideshowimage2.jpg";

const images = [image1, image2, image1, image2];
const delay = 2500;

function Before() {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<>
			<div className="before-title-1">
				<h1>Before / After</h1>
			</div>
			<div className="container-before">
				<div className="slideshow-slider">
					<div className="slideshow-title">
						<h2>Before</h2>
						<h2>After</h2>
					</div>
					<div
						className="current-slide"
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
					>
						{images.map((picture, idx) => (
							<img className="slide" key={idx} src={picture} />
						))}
					</div>
					<div className="dot">
						{images.map((_, idx) => (
							<div
								onClick={() => setIndex(idx)}
								key={idx}
								className={`dot ${index === idx ? "active" : ""}`}
							></div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
export default Before;
