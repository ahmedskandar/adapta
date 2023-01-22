import React from "react";
import classes from "./Chart.module.css";
import chart from "../../assets/svg/PieChart.svg";
import indicator from '../../assets/svg/indicator.svg'
import { ChartI, FormSliceI } from "../../data/interfaces";
import { useSelector } from 'react-redux'

const Chart: React.FC <ChartI>  = ({value, score}) => {

  const hasComputed = useSelector((state: FormSliceI) => state.form.hasComputed)

  hasComputed ? score = score : score = "--"

  return (
    <div className={classes.chart}>
      <img src={chart} width="100%" alt="" />
      <div className={classes["indicator-1"]} style={{transform: `rotate(calc(${value} * 265deg)) translateY(43%)`}}>
        <img src={indicator} />
      </div>

      <div className={classes.m}>
        <p id="ind_t_1">{score}</p>
        <small>Score</small>
      </div>
    </div>
  );
};

export default Chart;
