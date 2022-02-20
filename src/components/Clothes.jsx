import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Clothes.module.css";
export const Clothes = () => {
	const [clothData, setClothData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/posts", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				setClothData(json);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className={styles.clothMain}>
			{clothData.map((elem) => {
				if (elem.category === "clothes") {
					return (
						<div key={elem.id}>
							<div>
								<img
									className={styles.clothImg}
									src={elem.image}
									alt="clothes"
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
