import React from "react";
import styles from './card.module.css'

function CreditsCard(props){
  return(
    <div className={styles.cardContainer}>
    <div className={(props.order % 2 === 0) ? `${styles.card} ${styles.secondCard}`: `${styles.card}`}>
      <div className={styles.img}>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
      </div>
      <div className={styles.info}>
        <h2>Responsibilities</h2>
        <p>{props.res}</p>
        <span className={styles.contact}>
          <a href={props.github}>GitHub</a> | <a href={props.linkedin}>LinkedIn</a>
        </span>
      </div>
    </div>
  </div>
  );
}

export default CreditsCard;

