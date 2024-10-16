import React, { useEffect, useState, useRef } from "react";
import "../styling/Before.css";
import image1 from "../pictures/slideshowimage1.jpg";
import image2 from "../pictures/slideshowimage2.jpg";
import leftarrowpicture from "../pictures/back.png";
import rightarrowpicture from "../pictures/next.png";

const reviews = [
	{
		title: "Chimney Repair",
		review:
			"Moose Restoration did an amazing job on my chimney. The transformation is impressive, and the whole process was smooth and professional. Highly recommend!",
		name: "-Melanie C",
	},
	{
		title: "Chimney Repair",
		review:
			"Moose Restoration did an amazing job on my chimney. The transformation is impressive, and the whole process was smooth and professional. Highly recommend!",
		name: "-Melanie D",
	},
	{
		title: "Chimney Repair",
		review:
			"Moose Restoration did an amazing job on my chimney. The transformation is impressive, and the whole process was smooth and professional. Highly recommend!",
		name: "-Melanie E",
	},
	{
		title: "Chimney Repair",
		review:
			"Moose Restoration did an amazing job on my chimney. The transformation is impressive, and the whole process was smooth and professional. Highly recommend!",
		name: "-Melanie F",
	},
];
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
			<div className="breaktitle before-title-1">
				<h1>REVIEWS</h1>
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
			<div className="breaktitle before-title-2">
				<h1>
					More Reviews on{" "}
					<a href="#" className="bark-link">
						Bark
					</a>
				</h1>
			</div>
			<div className="text-reviews">
				<div className="slideshow-slider-reviews-container">
					<div className="slideshow-slider-reviews">
						<div
							style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
							className="current-slide-reviews"
						>
							{reviews.map((review, idx) => {
								return (
									<div className="slide-review" key={idx}>
										<h3>{review.title}</h3>
										<p className="review-text">{review.review}</p>
										<p>{review.name}</p>
									</div>
								);
							})}
						</div>
					</div>

					<div className="arrow-container">
						<div
							className="arrow left"
							onClick={() => {
								setIndex(index === 0 ? images.length - 1 : index - 1);
							}}
						>
							<img src={leftarrowpicture} />
						</div>
						<div
							className="arrow right"
							onClick={() => {
								setIndex(index === images.length - 1 ? 0 : index + 1);
							}}
						>
							<img src={rightarrowpicture} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Before;
