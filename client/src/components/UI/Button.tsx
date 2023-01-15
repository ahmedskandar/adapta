import React from 'react'
import { ButtonI } from '../../data/interfaces'
import classes from './Button.module.css'

const Button: React.FC <ButtonI> = ({ children, type = "button", onClick }) => {
  return (
    <button onClick={onClick} type={type} className={classes.btn}>{ children }</button>
  )
}

export default Button