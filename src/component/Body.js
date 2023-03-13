import React from "react";
import { Outlet } from "react-router-dom";
import Feed from "./Feed";
import ItemSlider from "./ItemSlider";

const Body = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default Body;
