import {
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-dashboard-pro-react";

const headerStyle = theme => ({
  appBar: {
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "81%",
    marginRight: "15em",
    paddingTop: "11px",
    zIndex: "1029",
    color: "#555555",
    border: "0",
    // borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
    [theme.breakpoints.up(1900)]: {
      width: "86%"
    },
    [theme.breakpoints.up(2400)]: {
      width: "93%"
    },
    [theme.breakpoints.down(1025)]: {
      width: "86.2%",
      marginRight: "8em"
    },
    [theme.breakpoints.down(801)]: {
      marginRight: "5.8em"
    },
    [theme.breakpoints.down(601)]: {
      marginRight: "0em",
      width: "100%"
    },
    [theme.breakpoints.down(481)]: {
      marginRight: "0em",
      width: "100%"
    }
  },
  container: {
    width: "1000px",
    minHeight: "50px",
    [theme.breakpoints.down(1025)]: {
      width: "960px"
    },
    [theme.breakpoints.down(801)]: {
      width: "760px!important"
    },
    [theme.breakpoints.down(769)]: {
      width: "700px!important"
    },
    [theme.breakpoints.down(601)]: {
      width: "550px!important"
    },
    [theme.breakpoints.down(481)]: {
      width: "450px!important"
    },
    [theme.breakpoints.down(421)]: {
      width: "380px!important"
    },
    [theme.breakpoints.down(361)]: {
      width: "300px!important"
    }
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#a9a9a9",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#a9a9a9",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#a9a9a9",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#a9a9a9",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#a9a9a9",
    ...defaultBoxShadow
  }
});

export default headerStyle;
