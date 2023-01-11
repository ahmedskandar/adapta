import React from "react";
import classes from "./ProtectedFeature.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProtectedFeature: React.FC = () => {
  return (
    <aside className={classes.container}>
      <div className={classes.biodiversityContainer}>
        <span>Biodiversity</span>
        <div className={classes.tooltip}>
          <FontAwesomeIcon className={classes.icon} icon={faCircleInfo} />
          <span className={classes.tooltiptext}>
            Biodiversity regions are geographically defined protected areas that
            are effectively maintained through legal or other ways to preserve
            biological diversity as well as natural resources and related
            cultural resources, such as forests and wildlife sanctuaries.(JUCN
            1994)
          </span>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </aside>
  );
};

export default ProtectedFeature;
