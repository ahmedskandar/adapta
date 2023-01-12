import { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img src={logo} className={classes.logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/subscription"}
              >
                Subscription
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.active : classes.link;
                }}
                to={"/portfoliomanagement"}
              >
                Portfolio Management
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? classes.activeSignUp : classes.linkSignUp;
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
      </div>
    </header>
  );
};

export default Header;
