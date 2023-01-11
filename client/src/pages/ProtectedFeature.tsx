import React from "react";
import classes from "./ProtectedFeature.module.css";

const ProtectedFeature: React.FC = () => {
  return (
    <div className={classes.container}>
      <p className={classes.paragraph}>
        “Biodiversity regions are geographically defined protected areas that
        are effectively maintained through legal or other ways to preserve
        biological diversity as well as natural resources and related cultural
        resources, such as forests and wildlife sanctuaries.(JUCN 1994)”
      </p>
      <div className={classes.checkbox}>
        <label htmlFor="checkbox">Protected area</label>

        <input type="checkbox" id="checkbox" />
      </div>
    </div>
  );
};

export default ProtectedFeature;
