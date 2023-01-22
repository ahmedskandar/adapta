import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SliderI } from "../../data/interfaces";
import classes from "./Slider.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Slider: React.FC <SliderI> = ({sliderColor, value, optimalScore}) => {

  let optimalScoreToString = optimalScore.toString() + '%'

  let classname

  if(sliderColor === "red") {
    classname = classes.red
  } else if(sliderColor === "green") {
    classname = classes.green
  } else if(sliderColor === "yellow") {
    classname = classes.yellow
  }

  return (
    <div>
      <div className={classes.sliderContainer}>
        <div className={classes.optimal}  style={{left: optimalScoreToString}}>
          <small>Optimal</small>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>

      <div className={classes.slider}>
        <input className={classname} type="range" min="1" max="100" value={value} />
      </div>
    </div>
  );
};

export default Slider;
