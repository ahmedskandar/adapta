import React from "react";
import Button from "../../components/UI/Button";
import classes from "./FormPrime.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FormSliceActions } from "../../store/FormSlice";
import { FormSliceI } from "../../data/interfaces";
import { ScoresSliceActions } from "../../store/ScoresSlice";

function FormPrime() {
  const { location, crop, period } = useSelector(
    (state: FormSliceI) => state.form
  );
  const dispatch = useDispatch();

  const newScoreHandler = () => {
    dispatch(FormSliceActions.resetComputation());
    dispatch(ScoresSliceActions.reset());
  };

  return (
    <aside className={classes.container}>
      <div>
        <h4>Location</h4>
        <span>{location}</span>
      </div>

      <div>
        <h4>Planting period</h4>
        <span>{period}</span>
      </div>

      <div>
        <h4>Crop to be planted</h4>
        <span>{crop}</span>
      </div>

      <div>
        <h4>Biodiversity</h4>
        <span>Non-protected area</span>
      </div>

      <div className={classes.btnContainer}>
        <Button onClick={newScoreHandler}>COMPUTE NEW SCORE</Button>
      </div>
    </aside>
  );
}

export default FormPrime;
