import React from 'react'
import { ChildrenI } from '../../data/interfaces'
import classes from './Card.module.css'

const Card: React.FC <ChildrenI> = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default Card