import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/navibar";
import Home from "./pages/home";
import Users from "./pages/users";
import RegisterUser from "./pages/register";
import Footer from "./components/footer";

function App() {
	return (
		<Router>
			<div className="App">
				<NaviBar />
				<Routes>
					<Route path="/" component={Home} />
					<Route path="/users" component={Users} />
					<Route path="/register" component={RegisterUser} />
				</Routes>
				<main className="App-main">main</main>
				<footer className="App-footer">
					<Footer />
				</footer>
			</div>
		</Router>
	);
}

export default App;
