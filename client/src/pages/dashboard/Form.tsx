import React, { useState } from "react";
import classes from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import tick from "../../assets/svg/tick.svg";
import danger from "../../assets/svg/danger.svg";

const Form: React.FC = () => {
  const [monthInputType, setMonthInputType] = useState("text");

  const [cropInputType, setCropInputType] = useState(false);

  const date = () => {
    setMonthInputType("month");
  };

  const crop = () => {
    setCropInputType(true);
  };

  return (
    <aside className={classes.container}>
      <form>
        <div className={classes.left}>
          <label htmlFor="location">Search Location</label> <br />
          <input
            type="text"
            placeholder="Enter Location Coordinates"
            id="location"
          />
        </div>
        <div className={`${classes.left} ${classes.margin}`}>
          <label htmlFor="time">Select Period To Plant</label> <br />
          <input
            onMouseOver={date}
            type={monthInputType}
            placeholder="Select month"
          />
        </div>
        <div className={`${classes.left} ${classes.margin}`}>
          <label htmlFor="crop">Select Crop</label> <br />
          {cropInputType === false ? (
            <input type="text" onMouseOver={crop} placeholder="Select crop" />
          ) : (
            <select className={classes.select}>
              <option value="" selected disabled hidden>
                Select a crop
              </option>
              <option value="1">Maize</option>
              <option value="2">Beans</option>
              <option value="3">Coffee</option>
            </select>
          )}
        </div>
        <div className={classes.computeBtn}>
          <input type="submit" value="COMPUTE SCORE" />
        </div>
      </form>
      <div className={classes.container2}>
        <div className={classes.biodiversityContainer}>
          <span>Biodiversity</span>
          <div className={classes.tooltip}>
            <FontAwesomeIcon className={classes.icon} icon={faCircleInfo} />
            <span className={classes.tooltiptext}>
              Biodiversity regions are geographically defined protected areas
              that are effectively maintained through legal or other ways to
              preserve biological diversity as well as natural resources and
              related cultural resources, such as forests and wildlife
              sanctuaries.(JUCN 1994)
            </span>
          </div>
        </div>
        <div>
          <img className={classes.info} src={tick} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default Form;
