import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Header from "./component/Header";
import ItemSlider from "./component/ItemSlider";
import LeftNav from "./component/LeftNav";
import Body from "./component/Body";
// import LoadingBar from "react-top-loading-bar";
function App() {
	// const [progress, setProgress] = useState(0);
	return (
		<Provider store={store}>
			<div className="relative pt-[80px] min-h-[100%] flex flex-col min-w-[1240px]">
				<Header />
				<LeftNav />
				<Body />
			</div>
		</Provider>
	);
}

export default App;
