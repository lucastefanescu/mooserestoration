import "../styling/Quote.css";
import ModalAcceptIcon from "../pictures/ModalAcceptIcon.svg";
import ModalRejectIcon from "../pictures/ModalRejectIcon.svg";

import React, { useState } from "react";

function ModalReject() {
	return (
		<>
			<div className="modal-container Reject">
				<img src={ModalRejectIcon} />
				<h1 className="Modal-Title Reject">Uh Oh..</h1>
				<p className="Modal-message Reject">
					Something went wrong. Please try again or call us at (647) 803-5849.
				</p>
				<button class="Modal-Button Reject">Close</button>
			</div>
		</>
	);
}

function ModalAccept() {
	return (
		<>
			<div className="modal-container Accept">
				<img src={ModalAcceptIcon} />
				<h1 className="Modal-Title Accept">Thank You</h1>
				<p className="Modal-message Accept">
					Our team will reach out to you within the next 24 hours.
				</p>
				<button class="Modal-Button Accept">Close</button>
			</div>
		</>
	);
}

function Quote() {
	const [modalAcceptVisibility, setModalRejectVisibility] = useState(false);
	const [modalRejectVisibility, setModalAcceptVisibility] = useState(false);
	const [buttonDisabled, setDisabled] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setDisabled(true);
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
					setModalAcceptVisibility(true);
					setDisabled(false);
				} else {
					setModalRejectVisibility(true);
					setDisabled(false);
				}
			})
			.catch((err) => {
				setModalAcceptVisibility(true);
				console.log(err);
				setDisabled(false);
			});
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
						<button
							type="submit"
							className={`btn ${buttonDisabled === true ? "disabled" : ""}`}
							disabled={buttonDisabled === true}
						>
							SUBMIT
						</button>
					</div>
				</form>
				{modalAcceptVisibility && (
					<>
						<div className="modal-overlay"></div>
						<ModalAccept />
					</>
				)}
				{modalRejectVisibility && (
					<>
						<div className="modal-overlay"></div>
						<ModalReject />
					</>
				)}
			</div>
		</>
	);
}
export default Quote;
