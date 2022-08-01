import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const handleShow = () => {
	console.log("go to reg");
};

function NaviBar() {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="px-5 py-3"
			>
				{" "}
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav ">
						<Navbar.Brand>ILearning, task4</Navbar.Brand>
						<Nav className="mx-auto">
							<Link to="/" className="nav-link">
								Home
							</Link>
							{
								//TODO: only for registered users
								//<Link to="/users" className="nav-link">
								//Users
								//</Link>
							}
						</Nav>
						<Nav>
							<Button variant="primary" className="me-3" onClick={handleShow}>
								Login
							</Button>
							<Button variant="primary" onClick={handleShow}>
								Register
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NaviBar;
