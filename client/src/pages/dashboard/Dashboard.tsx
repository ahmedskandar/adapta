import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import Form from "./Form";
import Map from "./Map";
import CompositeCard from "./CompositeCard";
import ReportCard from "./ReportCard";
import ReportModal from "./ReportModal";
import { useSelector } from "react-redux";
import { FormSliceI, StatsCardPrimeSliceI } from "../../data/interfaces";
import FormPrime from "./FormPrime";
import StatsCard from "./StatsCard/StatsCard";
import StatsCardPrime from "./StatsCard/StatsCardPrime";

const Home: React.FC = () => {

  const StatsCardPrimeStore = useSelector((state: StatsCardPrimeSliceI) => state.StatsCard)

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
                {hasComputed ? (
                  <StatsCardPrime
                    value={StatsCardPrimeStore.climateScore/100}
                    heading="Climate Score"
                    score={StatsCardPrimeStore.climateScore}
                  />
                ) : (
                  <StatsCard score="--" value={0} heading="" />
                )}
              </div>
              <div className={classes.statsContainer}>
                {hasComputed ? (
                  <StatsCardPrime
                    value={StatsCardPrimeStore.waterScore/100}
                    heading="Water Score"
                    score={StatsCardPrimeStore.waterScore}
                  />
                ) : (
                  <StatsCard score="--" value={0} heading="" />
                )}
              </div>
              <div className={classes.statsContainer}>
                {hasComputed ? (
                  <StatsCardPrime
                    value={StatsCardPrimeStore.soilScore/100}
                    heading="Soil Suitability Score"
                    score={StatsCardPrimeStore.soilScore}
                  />
                ) : (
                  <StatsCard score="--" value={0} heading="" />
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
