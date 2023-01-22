import React, { useState, useRef } from "react";
import classes from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import tick from "../../assets/svg/tick.svg";
import danger from "../../assets/svg/danger.svg";
import { useDispatch } from "react-redux";
import { FormSliceActions } from "../../store/FormSlice";
import Button from "../../components/UI/Button";
import { calcDate } from "../../data/Functions";
import { ScoresSliceActions } from "../../store/ScoresSlice";

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const [min, max] = calcDate();

  const [monthInputType, setMonthInputType] = useState("text");

  const [cropInputType, setCropInputType] = useState(false);

  const dateType = () => {
    setMonthInputType("month");
  };

  const cropType = () => {
    setCropInputType(true);
  };

  const locationInputRef = useRef<HTMLInputElement>(null);
  const periodInputRef = useRef<HTMLInputElement>(null);
  const cropInputRef = useRef<HTMLSelectElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const location = locationInputRef.current!.value;
    const period = periodInputRef.current!.value;
    const crop = cropInputRef.current!.value;

    /*Fetching api goes here*/
    let climateScore = 79,
      waterScore = 25,
      soilScore = 100,
      compositeScore = 50,
      aridityScore = 88.5,
      droughtScore = 20.6,
      rainfallScore = 40.6,
      waterErosionScore = 10,
      waterAvailabilityScore = 80,
      irrigationScore = 100,
      organicCarbonScore = 20,
      soilCationScore = 50,
      soilPHScore = 90
    /**Then Store the fetched values in redux */
    dispatch(
      ScoresSliceActions.store({
        climateScore,
        waterScore,
        soilScore,
        compositeScore,
        aridityScore,
        droughtScore,
        rainfallScore,
        waterAvailabilityScore,
        waterErosionScore,
        irrigationScore,
        organicCarbonScore,
        soilCationScore,
        soilPHScore
      })
    );

    dispatch(FormSliceActions.compute({ location, period, crop }));

    locationInputRef.current!.value = "";
    periodInputRef.current!.value = "";
    cropInputRef.current!.value = "";
  };

  return (
    <aside className={classes.container}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.left}>
          <label htmlFor="location">Search Location</label> <br />
          <input
            required
            ref={locationInputRef}
            type="text"
            placeholder="Enter Location Coordinates"
            id="location"
          />
        </div>
        <div className={`${classes.left} ${classes.margin}`}>
          <label htmlFor="time">Select Period To Plant</label> <br />
          <input
            required
            ref={periodInputRef}
            onFocus={dateType}
            max={max}
            min={min}
            type={monthInputType}
            placeholder="Select month"
          />
        </div>
        <div className={`${classes.left} ${classes.margin}`}>
          <label htmlFor="crop">Select Crop</label> <br />
          {cropInputType === false ? (
            <input type="text" onFocus={cropType} placeholder="Select crop" />
          ) : (
            <select required ref={cropInputRef} className={classes.select}>
              <option value="" selected disabled hidden>
                Select a crop
              </option>
              <option value="Maize">Maize</option>
              <option value="Beans">Beans</option>
              <option value="Coffee">Coffee</option>
            </select>
          )}
        </div>
        <div className={classes.computeBtn}>
          <Button type="submit">COMPUTE SCORE</Button>
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
        <img
          className={classes.info}
          src={tick}
          title="Non protected area"
          alt=""
        />
      </div>
    </aside>
  );
};

export default Form;
