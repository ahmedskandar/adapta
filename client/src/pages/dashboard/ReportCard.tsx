import React from "react";
import classes from "./ReportCard.module.css";

const ReportCard: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.heading}>CLIMATE ADAPTATION PLAN</h2>
        <div className={classes.smallHeading}>
          <h3>
            Detailed Credit Report Analysis <br />
            Your Credit Score is : ??
          </h3>
        </div>

        <p className={classes.paragraph}>
          You have a fair credit score. The below factors are informative and
          they represent areas which affected your score.
        </p>
      </div>
      <div className={classes.reportBtn}>View full Report</div>
    </div>
  );
};

export default ReportCard;
