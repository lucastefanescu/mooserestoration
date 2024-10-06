import "./styling/Header.css";
import "./styling/App.css";
import "./styling/Main.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Quote from "./components/Quote.jsx";
import Before from "./components/Before.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/quote" element={<Quote />} />
					<Route path="/reviews" element={<Before />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
