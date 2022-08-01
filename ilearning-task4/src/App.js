import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/navibar";
import Home from "./pages/home";
import Users from "./pages/users";
import Register from "./pages/register";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Router>
				<NaviBar />
				<main className="App-main">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/users" element={<Users />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</main>
				<footer className="App-footer">
					<Footer />
				</footer>
			</Router>
		</>
	);
}

export default App;
