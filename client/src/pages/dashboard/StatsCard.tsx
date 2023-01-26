import React from "react";
import classes from "./StatsCard.module.css";
import { ScoresSliceI, StatsCardI } from "../../data/interfaces";
import { useSelector } from "react-redux";
import { enumSliderColor } from "../../data/enums";
import Chart from "./Chart";
import Slider from "../../components/UI/Slider";
import { getSliderData } from "../../data/Functions";

const StatsCard: React.FC<StatsCardI> = ({ heading, value, score }) => {
  const scoreValues = useSelector((state: ScoresSliceI) => state.ScoresSlice);

   const sliderData = getSliderData(heading, scoreValues)
 
  

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
            <span>{sliderData?.score1}</span>
            <Slider
              optimalScore={sliderData?.optimalScore1}
              value={sliderData?.value1}
              sliderColor={sliderData?.color1}
            />
          </div>
          <div>
            <span>{sliderData?.score2}</span>
            <Slider
              optimalScore={sliderData?.optimalScore2}
              value={sliderData?.value2}
              sliderColor={sliderData?.color2}
            />
          </div>
          <div>
            <span>{sliderData?.score3}</span>
            <Slider
              optimalScore={sliderData?.optimalScore3}
              value={sliderData?.value3}
              sliderColor={sliderData?.color3}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StatsCard;
