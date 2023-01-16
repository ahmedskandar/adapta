import React from "react";
import classes from "./Chart.module.css";
import chart from "../../assets/svg/PieChart.svg";
import indicator from '../../assets/svg/indicator.svg'

const Chart: React.FC = () => {
  return (
    <div className={classes.chart}>
      <img src={chart} width="100%" alt="" />
      <div className={classes["indicator-1"]}>
        <img src={indicator} />
      </div>

      <div className={classes.m}>
        <p id="ind_t_1">--</p>
        <small>Score</small>
      </div>
    </div>
  );
};

export default Chart;
