import React from "react";
import { Outlet } from "react-router-dom";
import Feed from "./Feed";
import ItemSlider from "./ItemSlider";

const Body = () => {
  return (
    <>
      <div className=" bg-[#171a29] py-0 px-[20px]">
        <div className=" max-w-[1200px] min-w-[1200px] my-0 mx-auto relative flex items-center h-[340px] block">
          <div className="w-[100%]">
            <ItemSlider />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Body;
