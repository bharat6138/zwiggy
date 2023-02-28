import React, { useState, useEffect,useLayoutEffect } from "react";
import { usePosition } from "../utils/usePosition";
import { fetchDataFromApi } from "../utils/api";
import Card from "./Card";
import Loading from "./Loading";
import Filter from "./Filter";
import { Outlet , useSearchParams} from "react-router-dom";

const Feed = () => {
	const { latitude, longitude, error } = usePosition();
	const [ResturantsList, setResturantsList] = useState([]);
	const [page, setPage] = useState(16);
	const [loading, setLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();
    const param = searchParams.get('sortBy');
	
	// const { searchQuery } = useParams();
	useEffect(() => {
		if (latitude && longitude) fetchSliderList();
	}, [latitude, longitude,param]);

	useEffect(()=>{
		fetchSliderList(true);
	},[page])
	const fetchSliderList = (flag = false) => {
		// onLoaderFinished(30);
		// setSearchParams()
		fetchDataFromApi(
			`v5?lat=${latitude}&lng=${longitude}&offset=${page}&sortBy=${param}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`,
		)
			.then((response) => {
				// JSON.parse(data);
				
				console.log(response) 	 ;
				if(response  && response.data){
					flag  ? setResturantsList( [...ResturantsList  , ...response?.data?.cards]): setResturantsList(response.data.cards)
					// setResturantsList((prev) => [...prev, ...response?.data?.cards]);
					setLoading(false);
				}
				// onLoaderFinished(60);
				// if(param === response.data.sorts)

				
				// onLoaderFinished(100);
			})
			.catch((error) => console.log(error));
	};
	const handelInfiniteScroll = async () => {
		// console.log("scrollHeight" + document.documentElement.scrollHeight);
		// console.log("innerHeight" + window.innerHeight);
		// console.log("scrollTop" + document.documentElement.scrollTop);
		try {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				setLoading(true);
				setPage((prev) => prev + 1);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handelInfiniteScroll);
		return () => window.removeEventListener("scroll", handelInfiniteScroll);
	}, []);

	const fixedText = "I am fixed :)";
	const whenNotFixed = "I am not a fixed header :(";
	const [headerText, setHeaderText] = useState(whenNotFixed);
	useEffect(() => {
		const header = document.getElementById("myHeader");
		const topHeader = document.getElementById("topHeader");
		const sticky = header.offsetTop;
		const scrollCallBack = window.addEventListener("scroll", () => {
			if (window.pageYOffset > sticky) {
				header.classList.add("fixed-header");
				topHeader.classList.add("relative");
				if (headerText !== fixedText) {
					setHeaderText(fixedText);
				}
			} else {
				header.classList.remove("fixed-header");
				topHeader.classList.remove("relative");
				if (headerText !== whenNotFixed) {
					setHeaderText(whenNotFixed);
				}
			}
		});
		return () => {
			window.removeEventListener("scroll", scrollCallBack);
		};
	}, []);

	return (
		<div className=" min-h-[calc(100vh - 368px)] overflow-x-hidden overflow-y-auto relative z-2 fonts-loaded ">
			<div className=" max-w-[1200px] min-w-[1200px] my-0 mx-auto relative block">
				<div className="mt-0 mx-auto py-[20px] bg-white">
				<div className="relative  h-[72px]">
					<div
						className="flex items-center translate-x-[10px] translate-y-[10px] absolute top-0 left-0 right-0 "
						id="myHeader"
					>
						<div className=" flex items-center my-0 mx-auto max-w-[1200px] min-w-[1200px] h-[100%]">
							<h3 className=" font-[600] text-[#282c3f] text-[28px] flex-1  h-[100%]">
								{ResturantsList.length} restaurants {param}
							</h3>
							<Filter/>
						</div>
					</div>
					</div>
					<div className="pt-[40px] mt-[-10px] border-t border-[#e9e9eb]">
						<div className=" grid grid-cols-4 gap-x-12 justify-evenly">
							{ResturantsList?.map((restaurant, index) => {
							
									if (restaurant?.data?.data.aggregatedDiscountInfo !== undefined)  
								 return <Card {...restaurant?.data?.data} key={index} />

							})}
							{loading &&
								Array(4)
									.fill("")
									.map((e, index) => <Loading key={index} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feed;
