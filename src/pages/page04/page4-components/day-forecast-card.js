import React from "react";
import styles from "./day-forecast-card-styles.module.css";

const DayForecastCard = ({day, temp}) => {
	return (
		<div className={styles.dayForecastCard}>
			<div className={styles.header}>
				<h3>{day}</h3>
			</div>
			<div className={styles.info}>
				<h3>{temp}</h3>
			</div>
		</div>
	);
};

export default DayForecastCard;
