import "../styling/Quote.css";
import React, { useState } from "react";

function Modal() {}

function Quote() {
	const [modalVisibility, setModalVisibility] = useState(false);
	const [buttonDisabled, setDisabled] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();

		const formData = {
			name: e.target.name.value,
			email: e.target.email.value,
			phoneNumber: e.target.elements["phone-number"].value,
			description: e.target.elements.description.value,
		};

		fetch("http://localhost:8080/quote", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (response.ok) {
					console.log("blessed");
					setModalVisibility(true);
				} else {
					console.log("not blessed");
				}
			})
			.catch((err) => console.log(err));
	}
	return (
		<>
			<div className="main-quote-content">
				<form
					onSubmit={handleSubmit}
					className="quote-form"
					action="#"
					method="POST"
				>
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
						<button type="submit" className="btn">
							SUBMIT
						</button>
					</div>
				</form>
			</div>
			{modalVisibility && <Modal />}
		</>
	);
}
export default Quote;
