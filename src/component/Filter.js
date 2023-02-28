import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Filter = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <>
      <div className="flex items-center mt-[9px]">
        <a className="_2-ofZ _3bkpC" href="/search" style={{ opacity: 0 }}>
          <span className="icon-magnifier Vqj7X" />
          Search
        </a>
        <div className={`flex items-center text-[16px] font-[300] capitalize text-[#686b78] ml-[35px] cursor-pointer relative ${splitLocation[1] === "" ? "active" : ""}`}>
          <Link to="/relevance?sortBy=RELEVANCE">Relevance</Link>
        </div>
        <div className={`flex items-center text-[16px] font-[300] capitalize text-[#686b78] ml-[35px] cursor-pointer relative ${splitLocation[1] === "DELIVERY_TIME" ? "active" : ""}`}>
        <Link to="/delivery?sortBy=DELIVERY_TIME">Delivery Time</Link>
        </div>
        <div className={`flex items-center text-[16px] font-[300] capitalize text-[#686b78] ml-[35px] cursor-pointer relative ${splitLocation[1] === "RATING" ? "active" : ""}`}>
        <Link to="/rating?sortBy=RATING">Rating</Link>
        </div>
        {/* <div className={`flex items-center text-[16px] font-[300] capitalize text-[#686b78] ml-[35px] cursor-pointer relative ${splitLocation[1] === "" ? "active" : ""}`}>
          Cost: Low to High
        </div>
        <div className={`flex items-center text-[16px] font-[300] capitalize text-[#686b78] ml-[35px] cursor-pointer relative ${splitLocation[1] === "" ? "active" : ""}`}>
          Cost: High to Low
        </div> */}
        <div className="flex items-center text-[16px] font-[300] capitalize text-[#686b78] ml-[35px] cursor-pointer relative">
          <span className="h0xOG">Filters</span>
          <div className="font-[500] text-[#3d4152] ml-[10px]">
            <span className="icon-filter text-[#fc8019] ml-[10px] border border-[#fc8019] rounded-full text-[14px] flex items-center justify-center w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
