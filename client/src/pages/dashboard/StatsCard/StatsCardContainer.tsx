import React from "react";
import classes from "./StatsCardContainer.module.css";
import { StatsCardI } from "../../../data/interfaces";
import Chart from "../Chart";



const StatsCardContainer: React.FC <StatsCardI> = ({ children, score, value }) => {
  return (
    <div className={classes.container}>
      <div className={classes.chartCont}>
        <Chart score={score} value={value}/>
      </div>
      <div className={classes.cont2}>
        { children }
      </div>
    </div>
  );
};

export default StatsCardContainer;
