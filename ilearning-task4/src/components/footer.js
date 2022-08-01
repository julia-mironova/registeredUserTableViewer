import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

let gitLink = `https://github.com/julia-mironova/registeredUserTableViewer/tree/main/ilearning-task4`;

function Footer() {
	return (
		<>
			<Button variant="primary" onClick={() => window.open(gitLink, "_blank")}>
				Github link to this project
			</Button>
		</>
	);
}

export default Footer;
