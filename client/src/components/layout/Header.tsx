import { FC } from "react";
import logo from "../../assets/svg/logo.svg";
import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <header>
      {/* <img src="" alt="" /> */}
      <div className={classes.container}>
        {/* <div className={classes.logo}>ADAPTA LOGO</div> */}
        <img src={logo} className={classes.logo} alt="logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Subscription</li>
            <li>Portfolio Management</li>
            <li>Sign in</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
