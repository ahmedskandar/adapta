import classes from "./Footer.module.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        &copy; Adapta All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
