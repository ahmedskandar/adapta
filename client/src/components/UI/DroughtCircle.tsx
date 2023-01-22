import React from "react";
import classes from "./DroughtCircle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { DroughtCircleI, ScoresSliceI } from "../../data/interfaces";
import { enumScore } from "../../data/enums";

const DroughtCircle: React.FC<DroughtCircleI> = ({ score, tooltip1, tooltip2, tooltip3, tooltip4, tooltip5 }) => {
  const scoreValues = useSelector((state: ScoresSliceI) => state.ScoresSlice);

  let droughtScore = scoreValues.droughtScore;

  let rainfallScore = scoreValues.rainfallScore;

  let aridityScore = scoreValues.aridityScore;

  let icon1, icon2, icon3, icon4, icon5;

  let bIcon1, bIcon2, bIcon3, bIcon4, bIcon5;

  if (score === enumScore.droughtScore) {
    bIcon1 = "green";
    bIcon2 = "green";
    bIcon3 = "red";
    bIcon4 = "red";
    bIcon5 = "red";

    if (droughtScore < 20) {
      icon1 = "green";
    } else if (droughtScore < 40) {
      icon1 = "green";
      icon2 = "green";
    } else if (droughtScore < 60) {
      icon1 = "red";
      icon2 = "red";
      icon3 = "red";
      bIcon1 = "red";
      bIcon2 = "red";
      bIcon3 = "red";
    } else if (droughtScore < 80) {
      icon1 = "red";
      icon2 = "red";
      icon3 = "red";
      icon4 = "red";
      bIcon1 = "red";
      bIcon2 = "red";
      bIcon3 = "red";
      bIcon4 = "red";
    } else {
      icon1 = "red";
      icon2 = "red";
      icon3 = "red";
      icon4 = "red";
      icon5 = "red";
      bIcon1 = "red";
      bIcon2 = "red";
      bIcon3 = "red";
      bIcon4 = "red";
      bIcon5 = "red";
    }
  } else if (score === enumScore.rainfallScore) {
    bIcon1 = "red";
    bIcon2 = "red";
    bIcon3 = "green";
    bIcon4 = "green";
    bIcon5 = "green";

    if (rainfallScore < 20) {
      icon1 = "red";
    } else if (rainfallScore < 40) {
      icon1 = "red";
      icon2 = "red";
    } else if (rainfallScore < 60) {
      icon1 = "green";
      icon2 = "green";
      icon3 = "green";
      bIcon1 = "green";
      bIcon2 = "green";
      bIcon3 = "green";
    } else if (rainfallScore < 80) {
      icon1 = "green";
      icon2 = "green";
      icon3 = "green";
      icon4 = "green";
      bIcon1 = "green";
      bIcon2 = "green";
      bIcon3 = "green";
      bIcon4 = "green";
    } else {
      icon1 = "green";
      icon2 = "green";
      icon3 = "green";
      icon4 = "green";
      icon5 = "green";
      bIcon1 = "green";
      bIcon2 = "green";
      bIcon3 = "green";
      bIcon4 = "green";
      bIcon5 = "green";
    }
  } else if (score === enumScore.aridityScore) {
    bIcon1 = "red";
    bIcon2 = "red";
    bIcon3 = "green";
    bIcon4 = "green";
    bIcon5 = "green";

    if (aridityScore < 20) {
      icon1 = "red";
    } else if (aridityScore < 40) {
      icon1 = "red";
      icon2 = "red";
    } else if (aridityScore < 60) {
      icon1 = "green";
      icon2 = "green";
      icon3 = "green";
      bIcon1 = "green";
      bIcon2 = "green";
      bIcon3 = "green";
    } else if (aridityScore < 80) {
      icon1 = "green";
      icon2 = "green";
      icon3 = "green";
      icon4 = "green";
      bIcon1 = "green";
      bIcon2 = "green";
      bIcon3 = "green";
      bIcon4 = "green";
    } else {
      icon1 = "green";
      icon2 = "green";
      icon3 = "green";
      icon4 = "green";
      icon5 = "green";
      bIcon1 = "green";
      bIcon2 = "green";
      bIcon3 = "green";
      bIcon4 = "green";
      bIcon5 = "green";
    }
  }

  return (
    <div className={classes.container}>
      <FontAwesomeIcon
      title={tooltip1}
        className={`${classes.icon}`}
        style={{ border: `1px solid ${bIcon1}`, color: `${icon1}` }}
        icon={faCircle}
      />
      <FontAwesomeIcon
      title={tooltip2}
        className={`${classes.icon}`}
        style={{ border: `1px solid ${bIcon2}`, color: `${icon2}` }}
        icon={faCircle}
      />
      <FontAwesomeIcon
      title={tooltip3}
        className={`${classes.icon}`}
        style={{ border: `1px solid ${bIcon3}`, color: `${icon3}` }}
        icon={faCircle}
      />
      <FontAwesomeIcon
      title={tooltip4}
        className={`${classes.icon}`}
        style={{ border: `1px solid ${bIcon4}`, color: `${icon4}` }}
        icon={faCircle}
      />
      <FontAwesomeIcon
      title={tooltip5}
        className={`${classes.icon}`}
        style={{ border: `1px solid ${bIcon5}`, color: `${icon5}` }}
        icon={faCircle}
      />
    </div>
  );
};

export default DroughtCircle;
