import React from "react";
import { MetricInfoCardI } from "../../data/interfaces";
import classes from "./MetricInfoCard.module.css";

const MetricInfoCard: React.FC<MetricInfoCardI> = ({ riskText, riskPercentage, color }) => {
  
    let colorClass;

    if(color === 'red') {
        colorClass = classes.red
    } else if (color === 'green') {
        colorClass = classes.green
    } else if (color === 'orange') {
        colorClass = classes.orange
    }
    
  
    return (
    <div className={`${classes.container} ${colorClass}`}>
      <div className={classes.innerContainer}>
        <div>{riskText}</div>
        <div>{riskPercentage}</div>
      </div>
    </div>
  );
};

export default MetricInfoCard;
