import React from 'react'
import { CardI } from '../../data/interfaces'
import classes from './Card.module.css'

const Card: React.FC <CardI> = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default Card