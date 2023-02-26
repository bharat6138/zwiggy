import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`group w-[47px] h-[47px] bg-white shadow-2xl flex justify-center items-center rounded-full text-center cursor-pointer  relative outline-0 ${className}`}
			onClick={onClick}
		>
			<HiArrowRight className="text-lg text-black group-hover:translate-x-1 transition duration-150 ease-[cubic-bezier(.215,.61,.355,1)]" />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`group w-[47px] h-[47px] bg-white shadow-2xl flex justify-center items-center rounded-full text-center cursor-pointer  relative outline-0 ${className}`}
			onClick={onClick}
		>
			<HiArrowLeft className="text-lg text-black group-hover:-translate-x-1 transition duration-150 ease-[cubic-bezier(.215,.61,.355,1)]" />
		</div>
	);
}
export const menunavbar = [
	{ name: "Search", icon: <AiFillHome /> },
	{ name: "Offers", icon: <AiFillHome /> },
	{ name: "Help", icon: <AiFillHome /> },
	{ name: "Sign In", icon: <AiFillHome /> },
	{ name: "Cart", icon: <AiFillHome /> },
];

export const IMG_CDN_URL =
	"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// export const RES_LIST = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;

export const IMG_SLIDER_URL =
	"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/";

export const settings = {
	infinite: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	variableWidth: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 2,
			},
		},
	],
};
