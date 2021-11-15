import axios from "axios";
import { useState } from "react";

import "./weather-app-styles.css";
import { WiDaySunny } from "react-icons/wi";

const WeatherApp = () => {


	return (
		<div>
			<div className="main-container">
				<div className="nav">
					<p>nav</p>
				</div>
				<div className="current-weather">
					<div className="temp-and-icon">
						<WiDaySunny size={400}></WiDaySunny>
						<div className="temp">
							<h2>21 <span className="degree-symbol">&deg;C</span></h2>
						</div>
					</div>
					<div className="extra-data">
						<div>data here</div>
						<div>data here</div>
						<div>data here</div>
						<div>data here</div>
					</div>
				</div>
				<div className="week-forecast">
					<h3>DATA HERE</h3>
				</div>
			</div>
		</div>
	);
};

export default WeatherApp;
