import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menunavbar } from "../utils/constant";
import { toggleMenu } from "../redux/apiSlice";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <header
        className=" shadow-lg fixed top-0 left-0 right-0 h-[80px] z-[99999] px-[20px] py-0 bg-white "
        id="topHeader"
      >
        <div className=" max-w-[1200px] min-w-[1200px] flex items-center relative  h-[80px] my-0 mx-auto">
          <div className="flex h-5 items-center">
            <div
              className="flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] sm:hidden block "
              onClick={() => toggleMenuHandler()}
            >
              {!IsMenuOpen ? (
                <CgClose className="text-black text-xl" />
              ) : (
                <SlMenu className="text-black text-xl" />
              )}
            </div>

            <a
              href=""
              className=" block h-[49px] mr-[16px] ease-linear transform hover:scale-110 transition duration-500 "
            >
              <svg
                className="transform -scale-x-100"
                viewBox="0 0 559 825"
                height="49"
                width="34"
                fill="#fc8019"
              >
                <path
                  d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                  fill="url(#paint0_linear_19447_66107)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_19447_66107"
                    x1="445.629"
                    y1="63.8626"
                    x2="160.773"
                    y2="537.598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF993A"></stop>
                    <stop offset="1" stopColor="#F15700"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>

          <div className="group relative flex items-center ml-[30px] max-w-[300px] h-[30px] pr-[10px] mb-[-1px] cursor-pointer">
            <span className=" font-bold text-[#3d4152] relative float-left after:content-[''] after:absolute after:h-[2px] after:left-0 after:bottom-[-5px] after:w-[100%] after:bg-slate-500 group-hover:text-[#fc8019] group-hover:after:bg-[#fc8019]">
              <span>Other</span>
            </span>
            <span className="block pl-[5px] ml-[5px] text-[#93959f] text-ellipsis overflow-hidden whitespace-nowrap">
              Gyan Shakti Mandir Marg, East Shalimar Bagh, Block BH, West
              Shalimar Bagh, Shalimar Bagh, Delhi, 110088, India
            </span>
            <span className="icon-downArrow absolute right-[-12px] top-[50%] -translate-y-[50%] text-[.9rem] text-[#fc8019] "></span>
          </div>
          <ul className=" flex-1 min-w-0 flex flex-row justify-end items-center">
            {menunavbar.map((item, index) => {
              return (
                <li
                  className="group mr-[60px] text-[#3d4152] text-[6px] font-[500]  last:mr-[0px]"
                  key={index}
                >
                  <a
                    className="relative flex h-[80px] cursor-pointer pl-[28px] items-center ml-[-28px] group-hover:text-[#fc8019]"
                    href="/"
                  >
                    <span className="absolute top-[50%] left-0 -translate-y-[50%] text-xl">
                      {item.icon}
                    </span>
                    <span className="text-[16px] ">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
