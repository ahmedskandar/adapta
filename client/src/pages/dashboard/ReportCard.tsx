import React from "react";
import Button from "../../components/UI/Button";
import { FormSliceI, ReportCardI } from "../../data/interfaces";
import classes from "./ReportCard.module.css";
import { useSelector } from 'react-redux'

const ReportCard: React.FC <ReportCardI> = (props) => {

  const hasComputed = useSelector((state: FormSliceI) => state.form.hasComputed);

  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.heading}>CLIMATE ADAPTATION PLAN</h2>
        <div className={classes.smallHeading}>
          <h3>
            Detailed Credit Report Analysis <br />
           { hasComputed && <span>Your Credit Score is : ??</span>}
          </h3>
        </div>

        { hasComputed ?
          <p className={classes.paragraph}>
          You have a fair credit score. The below factors are informative and
          they represent areas which affected your score. <br /> <br />

          <b>Note:</b> <br /> 
          By acting on the following recommendations your composite credit score will improve.
        </p> : <p className={classes.paragraph}>The climate adaptation plan helps you to determine measures to take so as to improve your credit score. Please compute a score to view the report.</p>
        
      }
      </div>
      { hasComputed && <div className={classes.reportBtn}><Button onClick={props.onOpen}>View full Report</Button></div>}
    </div>
  );
};

export default ReportCard;
