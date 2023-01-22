import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormSliceI, SliderI } from "../../data/interfaces";
import classes from "./Slider.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux'

const Slider: React.FC <SliderI> = ({sliderColor, value, optimalScore}) => {

  const hasComputed = useSelector((state: FormSliceI) => state.form.hasComputed)


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
        {hasComputed && <div className={classes.optimal}  style={{left: optimalScoreToString}}>
          <small>Optimal</small>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>}
      </div>

      <div className={classes.slider}>
        <input className={classname} type="range" min="1" max="100" value={value} />
      </div>
    </div>
  );
};

export default Slider;
