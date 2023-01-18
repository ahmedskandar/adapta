import React from "react";
import classes from "./StatsCardPrime.module.css";
import StatsCardContainer from "./StatsCardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { StatsCardI } from "../../../data/interfaces";

const StatsCardPrime: React.FC <StatsCardI> = ({heading, value, score}) => {
  return (
    <StatsCardContainer value={value} score={score}>

    </StatsCardContainer>
  );
};

export default StatsCardPrime;
