import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import classes from './StatsCard.module.css'
import StatsCardContainer from './StatsCardContainer'
import { StatsCardI } from '../../../data/interfaces';

const StatsCard: React.FC <StatsCardI> = ({ scoreText, riskText, score, value }) => {
  return (
    <StatsCardContainer score={score} value={value}>
        <div className={classes.sec1}>
          <div className={classes.impact}>Impact</div>
          <div className={classes.score}>{scoreText}</div>
        </div>
        <h2 className={classes.risk}>{riskText}</h2>
        <div className={classes.sec2}>
          <div className={classes.smallSec}>
            <FontAwesomeIcon className={classes.redCircle} icon={faCircle} />
            <div>
              0 - 25% <br /> <b>High Risk</b>
            </div>
          </div>
          <div className={classes.smallSec}>
            <FontAwesomeIcon className={classes.yellowCircle} icon={faCircle} />
            <div>
              0 - 25% <br /> <b>Medium Risk</b>
            </div>
          </div>
          <div className={classes.smallSec}>
            <FontAwesomeIcon className={classes.greenCircle} icon={faCircle} />
            <div>
              0 - 25% <br /> <b>Low Risk</b>
            </div>
          </div>
        </div>
    </StatsCardContainer>
  )
}

export default StatsCard