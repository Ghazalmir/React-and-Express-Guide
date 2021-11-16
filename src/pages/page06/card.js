import React from "react";
import './card.css'

function CreditsCard(props){
  return(
    <div className={"card-container"}>
    <div className={(props.order % 2 === 0) ? "card second-card": "card"}>
      <div className={"img"}>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
      </div>
      <div className={"info"}>
        <h2>Responsibilities</h2>
        <p>{props.res}</p>
        <span className={"contact"}>
          <a href={props.github}>GitHub</a> | <a href={props.linkedin}>LinkedIn</a>
        </span>
      </div>
    </div>
  </div>
  );
}

export default CreditsCard;

