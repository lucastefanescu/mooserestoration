import React from "react";

import phone from "../pictures/Phone(1).svg";
import mail from "../pictures/mail.svg";
import instagram from "../pictures/Instagram.svg";
import "../styling/footer.css";

export default function Footer() {
	return (
		<div className="footer-container">
			<h1>Contact</h1>
			<div className="footer-content mail">
				<img src={mail} />
				<a href="mailto:mooserestorationca@gmail.com">
					mooserestorationca@gmail.com
				</a>
			</div>
			<div className="footer-content phone">
				<img src={phone} />
				<a href="tel:(647) 803-5849">
					Call Us Now: <span>(647) 803-5849</span>
				</a>
			</div>
			<div className="footer-content instagram">
				<img src={instagram} />
				<a
					href="https://www.instagram.com/mooserestoration/"
					target="_blank"
					without
					rel="noreferrer"
				>
					@mooserestoration
				</a>
			</div>
		</div>
	);
}
