import "/Users/lucas/Documents/mooserestoration/src/styling/Header.css";
import React from "react";
import logo from "/Users/lucas/Documents/mooserestoration/src/pictures/mooserestorationslogo.png";

function Header() {
	return (
		<>
			<header className="main-header">
				<div className="bottom-header">
					<nav className="navigation">
						<img src={logo} alt="Logo" className="logo"></img>
						<ul className="nav-list">
							<li className="nav-list-home">
								<a href="#">HOME</a>
							</li>
							<li className="nav-list-about">
								<a href="#">ABOUT US</a>
							</li>
							<li className="nav-list-reviews">
								<a href="#">REVIEWS</a>
							</li>
							<li className="nav-list-quote">
								<a href="#">QUOTE</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
