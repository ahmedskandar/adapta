import React from "react";
import classes from "./Home.module.css";
import Header from "../../components/layout/Header";
import Form from "./Form";
import ProtectedFeature from "../ProtectedFeature";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Form />
        <ProtectedFeature />
      </main>
    </>
  );
};

export default Home;
