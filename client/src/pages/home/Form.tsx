import React from "react";
import classes from "./Form.module.css";

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
        <div className={classes.buttons}>
          <div className={classes.evaluateBtn}>
            <input type="submit" value="Evaluate Biodiversity" />
          </div>
          <div className={classes.computeBtn}>
            <input type="submit" value="Compute Score" />
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Form;
