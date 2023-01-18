import React from "react";
import classes from "./CompositeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MetricInfoCard from "../../components/UI/MetricInfoCard";
import Chart from "./Chart";

const CompositeCard: React.FC = () => {
  return (
    <div className={`${classes.container} ${classes.tooltip}`}>
      <h3 className={classes.heading}>COMPOSITE SCORE</h3>
      <div className={classes.chart}>
        <Chart score="0" value={0}/>
      </div>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon className={classes.icon} icon={faCircleInfo} />
        <div className={classes.tooltiptext}>
          <h2>KEY METRICS</h2>
          <MetricInfoCard color="green" riskText="LOW RISK" riskPercentage="81% - 100%"/>
          <MetricInfoCard color="orange" riskText="ADAPTABLE RISK" riskPercentage="31% - 80%"/>
          <MetricInfoCard color="red" riskText="DO NOT PROCEED" riskPercentage="0% - 30%"/>
        </div>
      </div>
    </div>
  );
};

export default CompositeCard;
