import React from "react";
import classes from "./Dashboard.module.css";
import Form from "./Form";
import StatsCard from "./StatsCard";
import Map from "./Map";
import CompositeCard from "./CompositeCard";
import ReportCard from "./ReportCard";

const Home: React.FC = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <section className={classes.topSection}>
            <div>
              <div className={classes.formContainer}>
                <Form />
              </div>
              <div className={classes.mapContainer}>
                <Map />
              </div>
              <div className={classes.compositeContainer}>
                <CompositeCard />
              </div>
              <div className={classes.reportContainer}>
                <ReportCard />
              </div>
            </div>
          </section>
          <section className={classes.statsSection}>
            <div>
              <div className={classes.statsContainer}>
                <StatsCard riskText="High Risk" scoreText="Climate Score" />
              </div>
              <div className={classes.statsContainer}>
                <StatsCard riskText="Medium Risk" scoreText="Water Score" />
              </div>
              <div className={classes.statsContainer}>
                <StatsCard
                  riskText="Low Risk"
                  scoreText="Soil Suitability Score"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
