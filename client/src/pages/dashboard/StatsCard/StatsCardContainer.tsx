import React from "react";
import classes from "./StatsCardContainer.module.css";
import chart from "../../../assets/svg/PieChart.svg";
import { ChildrenI } from "../../../data/interfaces";



const StatsCardContainer: React.FC <ChildrenI> = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.chartCont}>
        <img src={chart} className={classes.chart} alt="" />
      </div>
      <div className={classes.cont2}>
        { children }
      </div>
    </div>
  );
};

export default StatsCardContainer;
