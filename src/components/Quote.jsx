import "../styling/Quote.css";
import React from "react";

function Quote() {
	return (
		<>
			<div className="main-quote-content">
				<form className="quote-form" action="#" method="POST">
					<div className="container">
						<h1>GET A QUOTE</h1>
						<label htmlFor="name"> Name </label>
						<input type="Name" id="name" placeholder="Enter name"></input>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="Enter email"></input>
						<label htmlFor="phone-number">Phone Number</label>
						<input
							type="tel"
							id="phone-number"
							placeholder="Enter phone number"
						></input>
						<label htmlFor="description">Job Description</label>
						<input
							type="text"
							id="description"
							placeholder="Enter job description"
						></input>
						<button className="btn">SUBMIT</button>
					</div>
				</form>
			</div>
		</>
	);
}
export default Quote;
