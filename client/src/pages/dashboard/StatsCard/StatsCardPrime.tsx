import React from "react";
import classes from "./StatsCardPrime.module.css";
import StatsCardContainer from "./StatsCardContainer";
import { StatsCardI } from "../../../data/interfaces";
import DroughtCircle from "./CircleIcons/DroughtCircle";
import { enumScore } from "../../../data/enums";

const StatsCardPrime: React.FC<StatsCardI> = ({ heading, value, score }) => {
  return (
    <StatsCardContainer value={value} score={score}>
      <div className={classes.container}>
        <div className={classes.sec1}>
          <div className={classes.impact}>Details</div>
          <div className={classes.score}>scoreText</div>
        </div>
        <div className={classes.sec2}>
          <div>
            <span>Drought Score</span>
            <DroughtCircle
              tooltip1="Very wet"
              tooltip2="Wet"
              tooltip3="Moderately dry"
              tooltip4="Dry"
              tooltip5="Very dry"
              score={enumScore.droughtScore}
            />
          </div>
          <div>
            <span>Rainfall Score</span>
            <DroughtCircle
              tooltip1="Very little rain"
              tooltip2="Little rain"
              tooltip3="Moderate rain"
              tooltip4="Rains alot"
              tooltip5="Optimal rain"
              score={enumScore.rainfallScore}
            />
          </div>
          <div>
            <span>Aridity Score</span>
          </div>
        </div>
      </div>
    </StatsCardContainer>
  );
};

export default StatsCardPrime;
