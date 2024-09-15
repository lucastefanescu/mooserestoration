import "../styling/Quote.css";
function Quote() {
	return (
		<>
			<div className="main-quote-content">
				<form className="quote-form" action="#" method="POST">
					<h1>GET A QUOTE</h1>
					<label htmlFor="name"> Name </label>
					<input type="Name" id="name"></input>
					<label htmlFor="email">Email</label>
					<input type="email" id="email"></input>
					<label htmlFor="phone-number">Phone number</label>
					<input type="tel" id="phone-number"></input>
					<label htmlFor="description">Description</label>
					<input type="text" id="description"></input>
					<label htmlFor="photos">Photos</label>
					<input type="file" id="photos" multiple></input>
				</form>
			</div>
		</>
	);
}
export default Quote;
