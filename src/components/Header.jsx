import "../styling/Header.css";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../pictures/mooserestorationslogo.png";

function Header() {
	return (
		<>
			<header className="main-header">
				<div className="bottom-header">
					<nav className="navigation">
						<Link to="/">
							<img src={logo} alt="Logo" className="logo"></img>
						</Link>
						<ul className="nav-list">
							<li className="nav-list-home">
								<Link to="/">HOME</Link>
							</li>
							<li className="nav-list-about">
								<Link to="/about">ABOUT</Link>
							</li>
							<li className="nav-list-reviews">
								<Link to="/reviews">REVIEWS</Link>
							</li>
							<li className="nav-list-quote">
								<Link to="/quote">QUOTE</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
