import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Clothes } from "../components/Clothes";
import { Electronics } from "../components/Electronics";
import { Paintings } from "../components/Paintings";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const RouteComponent = () => {
	return (
        <div>
            <Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/clothes" element={<Clothes />}></Route>
				<Route path="/electronics" element={<Electronics />}></Route>
				<Route path="/paintings" element={<Paintings />}></Route>
            </Routes>
            <Footer />
		</div>
	);
};
