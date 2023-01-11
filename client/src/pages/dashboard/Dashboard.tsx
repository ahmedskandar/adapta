import React from "react";
import classes from "./Dashboard.module.css";
import Form from "./Form";
import ProtectedFeature from "./ProtectedFeature";

const Home: React.FC = () => {
  return (
    <>
      <main>
        <div className={classes.container}>
          <Form />
          <ProtectedFeature />
        </div>
      </main>
    </>
  );
};

export default Home;
