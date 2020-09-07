import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import HeaderLinks from "./HeaderLinks.jsx";

import headerStyle from "assets/jss/material-dashboard-pro-react/components/headerStyle";

function Header({ ...props }) {
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar
      className={classes.appBar + appBarClasses}
      style={{ height: 40, display: "flex" }}
    >
      <CssBaseline />
      {window.innerWidth > 800 ? (
        <div
          className="d-flex w-100"
          style={{ justifyContent: "space-between" }}
        >
          <HeaderLinks />
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              // eslint-disable-next-line react/prop-types
              onClick={props.handleDrawerToggle}
              style={{ marginLeft: -37 }}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </div>
      ) : (
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <HeaderLinks />
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              // eslint-disable-next-line react/prop-types
              onClick={props.handleDrawerToggle}
              style={{ marginLeft: -37 }}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </div>
      )}
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
