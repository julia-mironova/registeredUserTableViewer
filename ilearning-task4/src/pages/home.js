import React from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap.min.js";

const Home = () => {
	return (
		<>
			<h2>Home page! 📰</h2>
			<h4> To see this TABLE</h4>
			<h5>
				you have to{" "}
				<span>
					<Link to="/users"> sign in</Link>
				</span>{" "}
				or{" "}
				<span>
					<Link to="/register">register</Link>
				</span>
			</h5>
		</>
	);
};
export default Home;
