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
              <StatsCard riskText="High Risk" scoreText="Climate Score" />
              <StatsCard riskText="Medium Risk" scoreText="Water Score" />
              <StatsCard
                riskText="Low Risk"
                scoreText="Soil Suitability Score"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
