import React from "react";
import styles from "./day-forecast-card-styles.module.css";

const DayForecastCard = ({day, temp}) => {
	return (
		<div className={styles.dayForecastCard}>
			<h3>{day}</h3>
			<h3>{temp}</h3>
		</div>
	);
};

export default DayForecastCard;
