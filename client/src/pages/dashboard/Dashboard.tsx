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
              <Form />
            </div>
            <div>
              <Map />
            </div>
            <div>
              <CompositeCard />
            </div>
            <div>
              <ReportCard />
            </div>
          </section>
          <section className={classes.statsSection}>
            <StatsCard riskText="High Risk" scoreText="Climate Score" />
            <StatsCard riskText="Medium Risk" scoreText="Water Score" />
            <StatsCard riskText="Low Risk" scoreText="Soil Suitability Score" />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
