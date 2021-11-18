import axios from "axios";
import { useState, useEffect } from "react";

import { WiDaySunny } from "react-icons/wi";
import DayForecastCard from "./page4-components/day-forecast-card";
import styles from "./weather-app-styles.module.css";
import CustomNavbar from "../../components/navbar/navbar";

const WeatherApp = () => {
	const [ currTemp, setCurrTemp ] = useState(0);
	const [ feelLikeTemp , setFeelLikeTemp ] = useState(0);
	const [ humidity , setHumidity ] = useState(0);
	const [ prec , setPrec ] = useState(0);
	const [ wind , setWind ] = useState(0);
	const [ highTemp , setHighTemp ] = useState(0);
	const [ lowTemp , setLowTemp ] = useState(0);

	const [ lat, setLat ] = useState(0);
	const [ long, setLong ] = useState(0);



	useEffect(() => {
		const updateWeather = async () => {
			const apiResponse = await axios.get("/weather-info");
			setCurrTemp(Math.round(apiResponse.data.main.feels_like));
			setFeelLikeTemp(Math.round(apiResponse.data.main.temp));
			setHumidity(Math.round(apiResponse.data.main.humidity));

			setWind(apiResponse.data.wind.speed);
			setHighTemp(Math.round(apiResponse.data.main.temp_max));
			setLowTemp(Math.round(apiResponse.data.main.temp_min));

		}
		updateWeather();

		// let options = {
		// 	enableHighAccuracy: true,
		// 	timeout: 5000,
		// 	maximumAge: 0,
		// };

		// function success(pos) {
		// 	let crd = pos.coords;

		// 	console.log("Your current position is:");
		// 	console.log(`Latitude : ${crd.latitude}`);
		// 	console.log(`Longitude: ${crd.longitude}`);
		// 	console.log(`More or less ${crd.accuracy} meters.`);
		// }

		// function error(err) {
		// 	console.warn(`ERROR(${err.code}): ${err.message}`);
		// }

		// navigator.geolocation.getCurrentPosition(success, error, options);
	})


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
								<h2>{currTemp}</h2>
							</div>
						</div>
					</div>
					<div className={styles.extraDataContainer}>
						<div className={styles.data}>
							<div className={styles.extraData}>
								<p className={styles.feelsLike}>
									Feels Like:&nbsp;
									<span className={styles.feelsLikeTemp}>{feelLikeTemp}</span>
								</p>
								<p className={styles.humidity}>
									Humidity:&nbsp;
									<span className={styles.humValue}>{humidity}%</span>
								</p>
								<p className={styles.precipitation}>
									Precipitation:&nbsp;
									<span className={styles.precValue}>20%</span>
								</p>
							</div>
							<div className={styles.extraData}>
								<p className={styles.wind}>
									Wind:&nbsp;
									<span className={styles.windValue}>{wind}km/h</span>
								</p>
								<p className={styles.high}>
									High:&nbsp;
									<span className={styles.highTempValue}>{highTemp}</span>
								</p>
								<p className={styles.low}>
									Low:&nbsp;
									<span className={styles.lowTempValue}>{lowTemp}</span>
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
