import React from "react";
import classes from "./Dashboard.module.css";
import Form from "./Form";
import ProtectedFeature from "./ProtectedFeature";
import StatsCard from "./StatsCard";

const Home: React.FC = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <Form />
          <ProtectedFeature />
          <section className={classes.statsContainer}>
            <StatsCard />
            <StatsCard />
            <StatsCard />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
