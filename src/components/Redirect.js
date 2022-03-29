import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Redirect = () => {
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/Home">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/About">About</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/ContactUs">Contact Us</Link>
		</li>
	</ul>
	</div>
);
};

export default Redirect;
