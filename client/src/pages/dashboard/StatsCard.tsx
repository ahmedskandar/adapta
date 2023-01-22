import React from "react";
import classes from "./StatsCard.module.css";
import { ScoresSliceI, StatsCardI } from "../../data/interfaces";
import { useSelector } from "react-redux";
import { enumSliderColor } from "../../data/enums";
import Chart from "./Chart";
import Slider from "../../components/UI/Slider";




const StatsCard: React.FC<StatsCardI> = ({ heading, value, score }) => {

  const scoreValues = useSelector((state: ScoresSliceI) => state.ScoresSlice);

  let score1,
    score2,
    score3,
    color1,
    color2,
    color3,
    value1,
    value2,
    value3,
    optimalScore1,
    optimalScore2,
    optimalScore3;

  if (heading === "Climate Score") {
    score1 = "Drought Score";
    score2 = "Rainfall Score";
    score3 = "Aridity Score";

    value1 = scoreValues.droughtScore;
    value2 = scoreValues.rainfallScore;
    value3 = scoreValues.aridityScore;

    optimalScore1 = 30;
    optimalScore2 = 30;
    optimalScore3 = 70;

    if (scoreValues.droughtScore >= 60 && scoreValues.droughtScore <= 100) {
      color1 = enumSliderColor.high;
    } else if (
      scoreValues.droughtScore >= 30 &&
      scoreValues.droughtScore < 60
    ) {
      color1 = enumSliderColor.optimal;
    } else {
      color1 = enumSliderColor.low;
    }

    if (scoreValues.rainfallScore >= 50 && scoreValues.rainfallScore <= 100) {
      color2 = enumSliderColor.high;
    } else if (
      scoreValues.rainfallScore >= 30 &&
      scoreValues.rainfallScore < 50
    ) {
      color2 = enumSliderColor.optimal;
    } else {
      color2 = enumSliderColor.low;
    }

    if (scoreValues.aridityScore === 100) {
      color3 = enumSliderColor.high;
    } else if (
      scoreValues.aridityScore >= 70 &&
      scoreValues.aridityScore < 100
    ) {
      color3 = enumSliderColor.optimal;
    } else {
      color3 = enumSliderColor.low;
    }
  } else if (heading === "Water Score") {
    score1 = "Water availability score";
    score2 = "Water erosion score";
    score3 = "Irrigation intensity Score";

    value1 = scoreValues.waterAvailabilityScore;
    value2 = scoreValues.waterErosionScore;
    value3 = scoreValues.irrigationScore;

    optimalScore1 = 5;
    optimalScore2 = 30;
    optimalScore3 = 70;

    if (scoreValues.waterAvailabilityScore === 100) {
      color1 = enumSliderColor.high;
    } else if (
      scoreValues.waterAvailabilityScore >= 70 &&
      scoreValues.waterAvailabilityScore < 100
    ) {
      color1 = enumSliderColor.optimal;
    } else {
      color1 = enumSliderColor.low;
    }

    if (scoreValues.waterErosionScore === 100) {
      color2 = enumSliderColor.high;
    } else if (
      scoreValues.waterErosionScore >= 70 &&
      scoreValues.waterErosionScore < 100
    ) {
      color2 = enumSliderColor.optimal;
    } else {
      color2 = enumSliderColor.low;
    }

    if (scoreValues.irrigationScore === 100) {
      color3 = enumSliderColor.high;
    } else if (
      scoreValues.irrigationScore >= 70 &&
      scoreValues.irrigationScore < 100
    ) {
      color3 = enumSliderColor.optimal;
    } else {
      color3 = enumSliderColor.low;
    }
  } else {
    score1 = "Organic carbon score";
    score2 = "Soil pH score";
    score3 = "Soil Cation(SCEC) score";

    value1 = scoreValues.organicCarbonScore;
    value2 = scoreValues.soilPHScore;
    value3 = scoreValues.soilCationScore;

    optimalScore1 = 30;
    optimalScore2 = 30;
    optimalScore3 = 70;

    if (scoreValues.organicCarbonScore === 100) {
      color1 = enumSliderColor.high;
    } else if (
      scoreValues.organicCarbonScore >= 70 &&
      scoreValues.organicCarbonScore < 100
    ) {
      color1 = enumSliderColor.optimal;
    } else {
      color1 = enumSliderColor.low;
    }

    if (scoreValues.soilPHScore === 100) {
      color2 = enumSliderColor.high;
    } else if (scoreValues.soilPHScore >= 70 && scoreValues.soilPHScore < 100) {
      color2 = enumSliderColor.optimal;
    } else {
      color2 = enumSliderColor.low;
    }

    if (scoreValues.soilCationScore === 100) {
      color3 = enumSliderColor.high;
    } else if (
      scoreValues.soilCationScore >= 70 &&
      scoreValues.soilCationScore < 100
    ) {
      color3 = enumSliderColor.optimal;
    } else {
      color3 = enumSliderColor.low;
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.chartCont}>
        <Chart score={score} value={value}/>
      </div>
      <div className={classes.cont2}>
      <div className={classes.container3}>
        <div className={classes.sec1}>
          <div className={classes.impact}>Details</div>
          <div className={classes.score}>scoreText</div>
        </div>
        <div className={classes.sec2}>
          <div>
            <span>{score1}</span>
            <Slider
              optimalScore={optimalScore1}
              value={value1}
              sliderColor={color1}
            />
          </div>
          <div>
            <span>{score2}</span>
            <Slider
              optimalScore={optimalScore2}
              value={value2}
              sliderColor={color2}
            />
          </div>
          <div>
            <span>{score3}</span>
            <Slider
              optimalScore={optimalScore3}
              value={value3}
              sliderColor={color3}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StatsCard;
