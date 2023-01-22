import React from "react";
import classes from "./ReportModal.module.css";
import ReactDOM from "react-dom";
import Card from "../../components/UI/Card";
import { BackdropI, FormSliceI, ModalOverlayI, ScoresSliceI } from "../../data/interfaces";
import Button from "../../components/UI/Button";
import { useSelector } from "react-redux";

const Backdrop: React.FC<BackdropI> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay: React.FC<ModalOverlayI> = ({ onClose }) => {

  
  const downloadReportHandler = () => {};

  const {location, period, crop} = useSelector((state: FormSliceI) => state.form)

  const scoreValues= useSelector((state: ScoresSliceI) => state.ScoresSlice)

  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <div>CLIMATE ADAPTATION PLAN</div>
      </header>

      <div className={classes.container}>
        <aside className={classes.aside}>
          <div>
            <h3 className={classes.h3Aside}>Details</h3>
            <div>Map</div>
            <h3 className={classes.h3Aside}>Location</h3>
            {location}
            <h3 className={classes.h3Aside}>Period</h3>
            {period}
            <h3 className={classes.h3Aside}>Crops to be planted</h3>
            {crop}
            <h3 className={classes.h3Aside}>Biodiversity</h3>
            Non-protected area
          </div>
        </aside>

        <div className={classes.mainArea}>
          <Card>
            <h3 className={classes.h3}>Detailed Credit Report Analysis</h3>
            <p>Your credit score is {scoreValues.creditScore}. You have a fair credit score.</p>
          </Card>
          <Card>
            <h3 className={classes.h3}>Crop Thresholds</h3>
            Table
          </Card>
          <Card>
            <h3 className={classes.h3}>Score Breakdown</h3>
            <div className={classes.scoreBreakdown}>
              <div>
                Drought score: <span className={classes.bold}> {scoreValues.droughtScore} </span>
                <br /> <br />
                Rainfall score: <span className={classes.bold}>{scoreValues.rainfallScore} </span>
                <br /> <br />
                Aridity score: <span className={classes.bold}>{scoreValues.aridityScore}</span> <br />
                <br />
                Composite score: <span className={classes.bold}>{scoreValues.climateScore}</span>
                <br /> <br />
              </div>
              <div>
                Water availability score:
                <span className={classes.bold}> {scoreValues.waterAvailabilityScore}</span> <br />
                <br />
                Water erosion score: <span className={classes.bold}>{scoreValues.waterErosionScore}</span>
                <br />
                <br />
                Irrigation intensity score:
                <span className={classes.bold}>{scoreValues.irrigationScore}</span> <br />
                <br />
                Composite score: <span className={classes.bold}>{scoreValues.waterScore}</span>
                <br />
                <br />
              </div>
              <div>
                Organic Carbon score: <span className={classes.bold}>{scoreValues.organicCarbonScore}</span>
                <br />
                <br />
                Soil pH score: <span className={classes.bold}>{scoreValues.soilPHScore}</span> <br />
                <br />
                Soil Moisture score: <span className={classes.bold}>{scoreValues.soilCationScore}</span>
                <br />
                <br />
                Composite score: <span className={classes.bold}>{scoreValues.soilScore}</span>
                <br />
                <br />
              </div>
            </div>
          </Card>

          <Card>
            <h3 className={classes.h3}>How to improve your score</h3>
            The below factors are informative and they represent areas which
            affected your score: <br />
            <ul className={classes.ul}>
              <li>
                Your area is prone to drought. The preferred drought index for
                Maize is 30.0. Consider harvesting rainwater during rainy
                seasons that can be used during dry seasons
              </li>
              <li>
                The rainfall in your area is higher than optimal. The preferred
                score for rainfall for Maize is 30.0. Construct a simple dam to
                harvest and store rainwater for irrigation purposes
              </li>
              <li>
                Your soil does not have enough organic material. You need to
                boost its fertility. Crop residue management and mulching are
                recommended to improve soil fertility and moisture.
              </li>
              <li>
                Your soil is too basic for Maize growth. Consider growing crops
                that can tolerate high soil pH such as sesame, sorghum, etc.
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <footer className={classes.footer}>
        <div>
          <Button onClick={onClose}>Close</Button>

          <Button onClick={downloadReportHandler}>Download</Button>
        </div>
      </footer>
    </div>
  );
};

const ReportModal: React.FC<BackdropI> = ({ onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ReportModal;
