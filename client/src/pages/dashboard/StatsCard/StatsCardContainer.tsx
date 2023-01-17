import React from "react";
import classes from "./StatsCardContainer.module.css";
import { StatsCardContainerI } from "../../../data/interfaces";
import Chart from "../Chart";



const StatsCardContainer: React.FC <StatsCardContainerI> = ({ children, score, value }) => {
  return (
    <div className={classes.container}>
      <div className={classes.chartCont}>
        <Chart value={value} score={score}/>
      </div>
      <div className={classes.cont2}>
        { children }
      </div>
    </div>
  );
};

export default StatsCardContainer;
