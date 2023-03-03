import React, { useState, useEffect } from "react";
import { usePosition } from "../utils/usePosition";
import { fetchDataFromApi } from "../utils/api";
import { settings } from "../utils/constant";
import { IMG_SLIDER_URL } from "../utils/constant";

import Slider from "react-slick";
import ShimmerSlider from "../shimmer/ShimmerSlider";

const ItemSlider = () => {
  const { latitude, longitude, error } = usePosition();
  const [sliderResturantsList, setSliderResturantsList] = useState([]);
  // const { searchQuery } = useParams();
  useEffect(() => {
    if (latitude && longitude) fetchSliderList();
  }, [latitude, longitude]);

  const fetchSliderList = () => {
    // onLoaderFinished(30);
    fetchDataFromApi(
      `v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
    ).then((data) => {
      console.log(data?.data?.cards[0]?.data?.data?.cards);
      // onLoaderFinished(60);

      setSliderResturantsList(data?.data?.cards[0]?.data?.data?.cards);
      // onLoaderFinished(100);
    });
  };
  return (
    <>
      {sliderResturantsList?.length === 0 ? (
        <ShimmerSlider />
      ) : (
        <Slider
          {...settings}
          className="grid grid-cols-4 gap-14 justify-evenly"
        >
          {sliderResturantsList.map((item, index) => (
            <div className="" key={index}>
              <div key={item.data.bannerId} className="mr-[50px]">
                <a className="group d-block text-center shadow-sm" href="/">
                  <img
                    width="260"
                    height="260"
                    alt="#"
                    src={
                      !item.data.creativeId
                        ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
                        : IMG_SLIDER_URL + item.data.creativeId
                    }
                    className="img-fluid transition duration-150 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default ItemSlider;
