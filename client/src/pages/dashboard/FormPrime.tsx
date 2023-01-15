import React from "react";
import Button from "../../components/UI/Button";
import classes from "./FormPrime.module.css";
import { useDispatch } from 'react-redux'
import { FormSliceActions } from "../../store/FormSlice";


function FormPrime() {

  const dispatch = useDispatch();

  const newScoreHandler = () => {
    dispatch(FormSliceActions.hasComputed())
  }

  return (
    <aside className={classes.container}>
      <div>
        <h4>Location</h4> 
        <span> LatLng -1.301368, 36.799972</span>
      </div>

      <div>
        <h4>Planting period</h4> 
        <span> 03-2023</span>
      </div>

      <div>
        <h4>Crop to be planted</h4> 
        <span>Maize</span>
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
