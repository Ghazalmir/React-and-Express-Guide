import axios from "axios";
import { useState } from "react";

import "./weather-app-styles.css";
import { WiDaySunny } from "react-icons/wi";
import DayForecastCard from "./page4-components/day-forecast-card";

const WeatherApp = () => {
	return (
		<div>
			<div className="main-container">
				<nav className="nav-container">
					<p>nav here</p>
				</nav>
				<div className="current-weather">
					<div className="temp-and-icon-and-location">
						<div className="location">
							<h3>Toronto, Ontario</h3>
						</div>
						<div className="temp-and-icon">
							<WiDaySunny size={400}></WiDaySunny>
							<div className="temp">
								<h2>21</h2>
							</div>
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
					<DayForecastCard></DayForecastCard>
					<DayForecastCard></DayForecastCard>
					<DayForecastCard></DayForecastCard>
					<DayForecastCard></DayForecastCard>
					<DayForecastCard></DayForecastCard>
				</div>
			</div>
		</div>
	);
};

export default WeatherApp;
