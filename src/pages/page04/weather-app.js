import axios from "axios";
import { useState, useEffect } from "react";

import { WiDaySunny } from "react-icons/wi";
import DayForecastCard from "./page4-components/day-forecast-card";
import styles from "./weather-app-styles.module.css";
import CustomNavbar from "../../components/navbar/navbar";

const WeatherApp = () => {
	// const [ currTemp, setCurrTemp ] = useState(0);

	// useEffect(() => {
	// 	const updateWeather = async () => {
	// 		const apiResponse = await axios.get("/weather-info");
	// 		console.log(apiResponse);
	// 	}
	// })


	return (
		<div>
			<CustomNavbar />
			<div className={styles.mainContainer}>
				<div className={styles.currentWeather}>
					<div className={styles.tempIconLocationDate}>
						<div className={styles.location}>
							<h3>Toronto, Ontario</h3>
						</div>
						<div className={styles.date}>
							<h3>September 21, 2021</h3>
						</div>
						<div className={styles.tempIcon}>
							<WiDaySunny size={400}></WiDaySunny>
							<div className={styles.temp}>
								<h2>21</h2>
							</div>
						</div>
					</div>
					<div className={styles.extraDataContainer}>
						<div className={styles.data}>
							<div className={styles.extraData}>
								<p className={styles.feelsLike}>
									Feels Like:&nbsp;
									<span className={styles.feelsLikeTemp}>20</span>
								</p>
								<p className={styles.humidity}>
									Humidity:&nbsp;
									<span className={styles.humValue}>64%</span>
								</p>
								<p className={styles.precipitation}>
									Precipritation:&nbsp;
									<span className={styles.precValue}>20%</span>
								</p>
							</div>
							<div className={styles.extraData}>
								<p className={styles.wind}>
									Wind:&nbsp;
									<span className={styles.windValue}>27km/h</span>
								</p>
								<p className={styles.high}>
									High:&nbsp;
									<span className={styles.highTempValue}>20</span>
								</p>
								<p className={styles.low}>
									Low:&nbsp;
									<span className={styles.lowTempValue}>20</span>
								</p>
							</div>
						</div>
						<div className={styles.quote}>
							<h3>Jam am a man of fortune and jam</h3>
						</div>
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
