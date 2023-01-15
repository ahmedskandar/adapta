import React from "react";
import classes from "./StatsCardPrime.module.css";
import StatsCardContainer from "./StatsCardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { StatsCardPrimeI } from "../../../data/interfaces";

const StatsCardPrime: React.FC <StatsCardPrimeI> = ({scoreText}) => {
  return (
    <StatsCardContainer>
      <div className={classes.sec1}>
        <div className={classes.impact}>Details</div>
        <div className={classes.score}>{scoreText}</div>
      </div>
      <div className={classes.sec2}>
        <div>
          <p className={classes.p}>Drought Score</p>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
        <div>
          <p className={classes.p}>Rainfall Score</p>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
        <div>
          <p className={classes.p}>Aridity Score</p>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>
    </StatsCardContainer>
  );
};

export default StatsCardPrime;
