import React from "react";
import Button from "../../components/UI/Button";
import { ReportCardI } from "../../data/interfaces";
import classes from "./ReportCard.module.css";

const ReportCard: React.FC <ReportCardI> = (props) => {
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
      <div className={classes.reportBtn}><Button onClick={props.onOpen}>View full Report</Button></div>
    </div>
  );
};

export default ReportCard;
