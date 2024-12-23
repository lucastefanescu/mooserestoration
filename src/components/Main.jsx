import "../styling/Header.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
	const Navigate = useNavigate();
	function handleQuoteClick() {
		Navigate("/quote");
	}

	return (
		<>
			<div className="main-content">
				<div className="main-text">
					<h2 className="main-text-one">Moose Restoration</h2>
					<h1 className="main-text-two">
						HOME RESTORATION EXCEEDING YOUR EXPECTATIONS.
					</h1>
					<h3 className="main-text-three">
						At Moose Restoration, we specialize in transforming your spaces with
						top-quality construction and restoration services.
					</h3>
					<button onClick={handleQuoteClick}>GET A QUOTE</button>
				</div>
			</div>
		</>
	);
}
export default Main;
