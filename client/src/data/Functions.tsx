import { enumSliderColor } from "./enums";

export const calcDate = () => {
  const currDate = new Date();

  const currYear = currDate.getFullYear();
  const currMonth =
    currDate.getMonth() + 1 < 10 && `0${currDate.getMonth() + 1}`;

  const min = `${currYear}-${currMonth}`;
  const max = `${currYear + 10}-${currMonth}`;

  return [min, max];
};

export const getSliderData = (
  heading: any,
  scoreValues: any
) => {
  let score1 = "",
    score2 = "",
    score3 = "",
    color1: enumSliderColor,
    color2: enumSliderColor,
    color3: enumSliderColor,
    value1: number,
    value2: number,
    value3: number,
    optimalScore1 = 0,
    optimalScore2 = 0,
    optimalScore3 = 0;

  if (heading === "Climate Score") {
    score1 = "Drought Score";
    score2 = "Rainfall Score";
    score3 = "Aridity Score";

    value1 = scoreValues.droughtScore;
    value2 = scoreValues.rainfallScore;
    value3 = scoreValues.aridityScore;

    optimalScore1 = 10;
    optimalScore2 = 90;
    optimalScore3 = 10;

    if (scoreValues.droughtScore >= 0 && scoreValues.droughtScore <= 20) {
      color1 = enumSliderColor.green;
    } else {
      color1 = enumSliderColor.red;
    }

    if (scoreValues.rainfallScore >= 80 && scoreValues.rainfallScore <= 100) {
      color2 = enumSliderColor.green;
    } else {
      color2 = enumSliderColor.red;
    }

    if (scoreValues.aridityScore >= 0 && scoreValues.aridityScore <= 20) {
      color3 = enumSliderColor.green;
    } else {
      color3 = enumSliderColor.red;
    }
  } else if (heading === "Water Score") {
    score1 = "Water availability score";
    score2 = "Water erosion score";
    score3 = "Irrigation intensity Score";

    value1 = scoreValues.waterAvailabilityScore;
    value2 = scoreValues.waterErosionScore;
    value3 = scoreValues.irrigationScore;

    optimalScore1 = 90;
    optimalScore2 = 10;
    optimalScore3 = 90;

    if (
      scoreValues.waterAvailabilityScore >= 80 &&
      scoreValues.waterAvailabilityScore <= 100
    ) {
      color1 = enumSliderColor.green;
    } else {
      color1 = enumSliderColor.red;
    }

    if (
      scoreValues.waterErosionScore >= 0 &&
      scoreValues.waterErosionScore <= 20
    ) {
      color2 = enumSliderColor.green;
    } else {
      color2 = enumSliderColor.red;
    }

    if (
      scoreValues.irrigationScore >= 80 &&
      scoreValues.irrigationScore <= 100
    ) {
      color3 = enumSliderColor.green;
    } else {
      color3 = enumSliderColor.red;
    }
  } else {
    score1 = "Organic carbon score";
    score2 = "Soil pH score";
    score3 = "Soil Cation(SCEC) score";

    value1 = scoreValues.organicCarbonScore;
    value2 = scoreValues.soilPHScore;
    value3 = scoreValues.soilCationScore;

    optimalScore1 = 90;
    optimalScore2 = 90;
    optimalScore3 = 90;

    if (
      scoreValues.organicCarbonScore >= 80 &&
      scoreValues.organicCarbonScore < 100
    ) {
      color1 = enumSliderColor.green;
    } else {
      color1 = enumSliderColor.red;
    }

    if (scoreValues.soilPHScore >= 80 && scoreValues.soilPHScore <= 100) {
      color2 = enumSliderColor.green;
    } else {
      color2 = enumSliderColor.red;
    }

    if (
      scoreValues.soilCationScore >= 80 &&
      scoreValues.soilCationScore <= 100
    ) {
      color3 = enumSliderColor.green;
    } else {
      color3 = enumSliderColor.red;
    }
  }
  return {
    score1,
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
    optimalScore3,
  };
};
