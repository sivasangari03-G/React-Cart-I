import React from "react";
import { Link } from "react-router-dom";
import { Home } from "../components/Home";
import styles from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<>
			<div className={styles.Navbar_main}>
				<div className={styles.Navbar_div}>
					<Link to="/electronics">ELECTRONICS</Link>
					<Link to="/paintings">PAINTINGS</Link>
					<Link to="/clothes">CLOTHES</Link>
				</div>
				<img
					className={styles.navbarImg}
					src="https://media.istockphoto.com/photos/green-shopping-picture-id171316883?s=612x612"
					alt=""
				/>
			</div>
			<div>
				<Home />
			</div>
		</>
	);
};
