import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Navbar, Nav, Button } from "react-bootstrap";

function NaviBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Navbar.Brand>ILearning, task4</Navbar.Brand>
					<Nav className="mr-auto">
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link to="/users" className="nav-link">
							Users
						</Link>
						<Link to="/register" className="nav-link">
							Register
						</Link>
					</Nav>
					<Nav>
						<Button variant="primary" className="mr-2">
							Log in
						</Button>
						<Button variant="primary">Sign out</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NaviBar;
