import React from "react";
import classes from "./StatsCard.module.css";
import chart from "../../assets/svg/PieChart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { StatsCardI } from "../../data/interfaces";

const StatsCard: React.FC<StatsCardI> = ({ scoreText, riskText }) => {
  return (
    <div className={classes.container}>
      <div className={classes.chartCont}>
        <img src={chart} className={classes.chart} alt="" />
      </div>
      <div className={classes.cont2}>
        <div className={classes.sec1}>
          <div className={classes.impact}>Impact</div>
          <div className={classes.score}>{scoreText}</div>
        </div>
        <h2 className={classes.risk}>{riskText}</h2>
        <div className={classes.sec2}>
          <div className={classes.smallSec}>
            <FontAwesomeIcon className={classes.redCircle} icon={faCircle} />
            <div>
              0 - 25% <br /> <b>High Risk</b>
            </div>
          </div>
          <div className={classes.smallSec}>
            <FontAwesomeIcon className={classes.yellowCircle} icon={faCircle} />
            <div>
              0 - 25% <br /> <b>Medium Risk</b>
            </div>
          </div>
          <div className={classes.smallSec}>
            <FontAwesomeIcon className={classes.greenCircle} icon={faCircle} />
            <div>
              0 - 25% <br /> <b>Low Risk</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
