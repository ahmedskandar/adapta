import React from "react";
import classes from "./CompositeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import chart from "../../assets/svg/PieChart.svg";

const CompositeCard: React.FC = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>COMPOSITE SCORE</h3>
      <div>
        <img className={classes.chart} src={chart} alt="" />
      </div>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
    </div>
  );
};

export default CompositeCard;
