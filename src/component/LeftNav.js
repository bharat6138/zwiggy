import React from "react";
import { useSelector } from "react-redux";

const LeftNav = () => {
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);

	return (
		<div
			id="sidebar"
			className={`overflow-y-auto h-full py-4 bg-white absolute md:relative z-10  w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0  transition-all sm:hidden${
				IsMenuOpen ? "translate-x-[0px]" : ""
			}`}
		>
			{/* <div
			id="sidebar"
			className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
				IsMenuOpen ? "translate-x-0" : ""
			}`}
		></div> */}
			<div
				className={`flex px-5 flex-col ${IsMenuOpen ? "px-2 items-center" : ""}`}
			>
				<div className="text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]">
					<span className="text-xl mr-5">aa</span>
					aa
				</div>
			</div>
		</div>
	);
};

export default LeftNav;
