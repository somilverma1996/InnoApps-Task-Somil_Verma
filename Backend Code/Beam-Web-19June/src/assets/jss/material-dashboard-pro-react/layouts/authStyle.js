import {
  whiteColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

const pagesStyle = theme => ({
  logoImage: {
    marginLeft: '8.8%',
    width: '14%',
    height: '80px',
    
    [theme.breakpoints.up(1366)]: {
      width: '13%',
      height: '90px',
      marginLeft: '9.5%',
    },
    [theme.breakpoints.up(1900)]: {
      width: 'auto',
      height: '110px',
      marginLeft: '8.6%',
    },
    [theme.breakpoints.down(601)]: {
      width: '40%',
      height: 'auto',
      marginLeft: '2.5%',
    }
  },
  wrapper: {
    height: "auto",
    minHeight: "100vh",
    position: "relative",
    top: "0",
    backgroundColor: 'rgb(240,240,240)'
  },
  bgColorWhite: {
    backgroundColor: whiteColor
  },
  fullPage: {
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    display: "flex!important",
    margin: "0",
    border: "0",
    color: whiteColor,
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "fit-content!important"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      border: "none !important"
    },
    "&:before": {
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.65)"
    },
    "&:before,&:after": {
      display: "block",
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: "2"
    }
  }
});

export default pagesStyle;
