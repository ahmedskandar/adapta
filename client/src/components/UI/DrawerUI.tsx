import { useState } from "react"
import { Drawer, IconButton } from '@mui/material'
import {Menu} from '@mui/icons-material'
import { NavLink } from "react-router-dom";
import classes from './DrawerUI.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

const DrawerUI:React.FC = () => {
    const [open, setOpen] = useState(false)
  return (
<>
<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
<nav className={classes.nav}>
          <ul>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/subscription"}
              >
                Subscription
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/portfoliomanagement"}
              >
                Portfolio Management
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/signin"}
              >
                Sign in
                <FontAwesomeIcon
                  className={classes.signInIcon}
                  icon={faSignIn}
                />
              </NavLink>
            </li>
          </ul>
        </nav>
</Drawer>
<IconButton onClick={() => setOpen(!open)}>
    <Menu />
</IconButton>
</>  )
}

export default DrawerUI