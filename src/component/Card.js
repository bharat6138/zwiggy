import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import Image from "../utils/Image";
const Card = ({
	name,
	cloudinaryImageId,
	cuisines,
	lastMileTravelString,
	avgRating,
	slaString,
	costForTwoString,
	ribbon,
	totalRatings,
	aggregatedDiscountInfo,
}) => {
	return (
		<div className="relative max-w-max mb-[80px]">
			<a
				href="#"
				className="group cursor-pointer mx-[-20px] mt-[-20px] mb-[-57px] block bg-white "
			>
				<div className="group-hover:border group-hover:border-[#d3d5df] px-[20px] pt-[20px] pb-[56px] group-hover:shadow-md">
					<div className="relative fonts-loaded  w-[254px]">
						<div className="bg-[#eef0f5] w-[254px] h-[160px]">
							
							 <Image
							 class="transition-opacity  duration-500 ease-out opacity-1  "
							 alt="Punjabi Angithi"
            style={{ width: 254, height: 160 }}
            placeholderImg="https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load"
            src={
				!cloudinaryImageId
					? "https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/3cb974c28eb00627cc0671685c79ffd9.jpg"
					: IMG_CDN_URL + cloudinaryImageId
			}
          />
						</div>
						<div className="mt-[14px]">
							<h4 className="text-[17px] font-[500] break-words ">{name}</h4>
							<p className="text-[#686b78] mt-[4px] text-[13px]">
								{cuisines?.join(", ")}
							</p>
						</div>
						<div className="mt-[18px] text-[12px] text-[#535665] flex items-center justify-between">
							<div
								class={`text-[#fff] h-[20px] w-[43px] py-0 px-[5px] font-[400]  flex items-center  
										${avgRating <= 3.9 && !isNaN(avgRating) ? "bg-[#c0813d]" : "bg-[#48c479] "}
								`}
							>
								<span class="icon-star text-[10px] mr-[4px] relative top-[-1px]"></span>
								<span>{avgRating}</span>
							</div>
							<div>•</div>
							<div>{slaString}</div>
							<div>•</div>
							<div class="nVWSi">{costForTwoString}</div>
						</div>
						{aggregatedDiscountInfo ? (
							<div class="border-t border-[#e9e9eb] pt-[14px] mt-[14px] text-[#8a584b] flex items-center font-[600]">
								<span class="icon-offer-filled w-[20px] h-[16px] mr-[16px] origin-center"></span>
								<span class="font-[400] overflow-ellipsis overflow-hidden whitespace-nowrap">
									{aggregatedDiscountInfo?.shortDescriptionList[0].meta}
								</span>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</a>
		</div>
	);
};

export default Card;
