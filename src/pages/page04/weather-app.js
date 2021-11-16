import axios from "axios";
import { useState } from "react";

// import styles from "./weather-app-styles.module.css";
import { WiDaySunny } from "react-icons/wi";
import DayForecastCard from "./page4-components/day-forecast-card";
import styles from "./weather-app-styles.module.css";

const WeatherApp = () => {
	return (
		<div>
			<div className={styles.mainContainer}>
				<nav className={styles.navContainer}>
					<p>nav here</p>
				</nav>
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
