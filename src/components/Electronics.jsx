import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Clothes.module.css";


export const Electronics = () => {
	const [ElectronicsData, setElectronicsData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/posts", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				setElectronicsData(json);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className={styles.clothMain}>
			{ElectronicsData.map((elem) => {
				if (elem.category === "electronics") {
					return (
						<div key={elem.id}>
							<div>
								<img
									className={styles.clothImg}
									src={elem.image}
									alt="paintinggs"
								/>
							</div>
							<div className={styles.heading}>{elem.title}</div>
							<div className={styles.price}>₹ {elem.price}</div>
						</div>
					);
				} else {
					return <div key={`${elem.id}`}></div>;
				}
			})}
		</div>
	);
};
