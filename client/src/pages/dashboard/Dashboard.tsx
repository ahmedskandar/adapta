import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import Form from "./Form";
import Map from "./Map";
import CompositeCard from "./CompositeCard";
import ReportCard from "./ReportCard";
import ReportModal from "./ReportModal";
import { useSelector } from "react-redux";
import { FormSliceI, ScoresSliceI } from "../../data/interfaces";
import FormPrime from "./FormPrime";
import StatsCard from "./StatsCard/StatsCard";
import StatsCardPrime from "./StatsCard/StatsCardPrime";
import StatsCardContainer from "./StatsCard/StatsCardContainer";

const Home: React.FC = () => {

  const scoreValues = useSelector((state: ScoresSliceI) => state.ScoresSlice)

  const hasComputed = useSelector(
    (state: FormSliceI) => state.form.hasComputed
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <ReportModal onClose={closeModalHandler} />}
      <main className={classes.main}>
        <div className={classes.container}>
          <section className={classes.topSection}>
            <div>
              <div className={classes.formContainer}>
                {hasComputed ? <FormPrime /> : <Form />}
              </div>
              <div className={classes.mapContainer}>
                <Map />
              </div>
              <div className={classes.compositeContainer}>
                <CompositeCard />
              </div>
              <div className={classes.reportContainer}>
                <ReportCard onOpen={openModalHandler} />
              </div>
            </div>
          </section>
          <section className={classes.statsSection}>
            <div>
              <div className={classes.statsContainer}>
                <StatsCardContainer value={scoreValues.climateScore/100}
                    heading="Climate Score"
                    score={scoreValues.climateScore} />
              </div>
              <div className={classes.statsContainer}>
              <StatsCardContainer value={scoreValues.waterScore/100}
                    heading="Climate Score"
                    score={scoreValues.waterScore} />
              </div>
              <div className={classes.statsContainer}>
              <StatsCardContainer value={scoreValues.soilScore/100}
                    heading="Climate Score"
                    score={scoreValues.soilScore}/>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
