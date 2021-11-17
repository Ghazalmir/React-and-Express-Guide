import axios from "axios";
import { useState } from "react";

import { WiDaySunny } from "react-icons/wi";
import DayForecastCard from "./page4-components/day-forecast-card";
import styles from "./weather-app-styles.module.css";
import CustomNavbar from "../../components/navbar/navbar";

const WeatherApp = () => {
	return (
		<div>
			<CustomNavbar />
			<div className={styles.mainContainer}>
				<div className={styles.currentWeather}>
					<div className={styles.tempIconLocation}>
						<div className={styles.location}>
							<h3>Toronto, Ontario</h3>
						</div>
						<div className={styles.tempIcon}>
							<WiDaySunny size={400}></WiDaySunny>
							<div className={styles.temp}>
								<h2>21</h2>
							</div>
						</div>
					</div>
					<div className={styles.extraData}>
						<div>data here</div>
						<div>data here</div>
						<div>data here</div>
						<div>data here</div>
					</div>
				</div>
				<div className={styles.weekForecast}>
					<DayForecastCard day="Monday"></DayForecastCard>
					<DayForecastCard day="Tuesday"></DayForecastCard>
					<DayForecastCard day="Wednesday"></DayForecastCard>
					<DayForecastCard day="Thursday"></DayForecastCard>
					<DayForecastCard day="Friday"></DayForecastCard>
				</div>
			</div>
		</div>
	);
};

export default WeatherApp;
