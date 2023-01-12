import React from "react";
import classes from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Form: React.FC = () => {
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
          <label htmlFor="location">Select time to plant</label> <br />
          <input type="text" placeholder="Select Time" id="location" />
        </div>
        <div className={`${classes.left} ${classes.margin}`}>
          <label htmlFor="location">Search Location</label> <br />
          <input type="text" placeholder="Select Crop" id="location" />
        </div>
        <div className={classes.computeBtn}>
          <input type="submit" value="Compute Score" />
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
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
    </aside>
  );
};

export default Form;
