import React from "react";

const PageNotFound = () => {
	return (
		<div className=" min-h-[100vh -229px] flex items-center justify-center ">
			<div className=" text-center w-[430px] py-[120px] px-0 ">
				<div className=" bg-contain bg-center h-[260px] bg-[url('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck')]"></div>
				<div className="text-[#282c3f] text-[32px] font-[600] mt-[30px] mb-[10px]">
					Uh-oh!
				</div>
				<div className="text-[#93959f] text-[16px]">
					Sorry! This should not have happened. Please retry.
				</div>
				<a
					href="/"
					className=" leading-[40px] cursor-pointer inline-block text-center text-[#fff] bg-[#fc8019] shadow-lg h-[40px] py-0 px-[20px] w-auto mt-[25px] text-[15px] font-[600] outline-none"
				>
					RETRY
				</a>
			</div>
		</div>
	);
};

export default PageNotFound;
