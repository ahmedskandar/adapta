import React from "react";
import classes from "./Wrapper.module.css";
import { WrapperI } from "../../data/interfaces";

const Wrapper: React.FC <WrapperI> = ({ children }) => {
  return <div className={classes.flexWrapper}>{children}</div>;
};

export default Wrapper;
