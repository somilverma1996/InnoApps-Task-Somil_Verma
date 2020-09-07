import {
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-dashboard-pro-react";

const sidebarStyle = theme => ({
  drawerPaper: {
    border: "none",
    fontFamily: "Avenir",
    position: "fixed",
    top: "0",
    overflow: "hidden",
    backgroundColor: "transparent",
    bottom: "0",
    left: "0",
    zIndex: "1",
    width: 240,
    [theme.breakpoints.up("md")]: {
      // margin: "5.8%",
      marginLeft: "127px",
      marginTop: "58px",
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.up("1400")]: {
      // margin: "5.8%",
      marginLeft: "142px",
      marginTop: "58px",
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.up(1900)]: {
      marginLeft: "138px",
      marginTop: "58px",
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.up(2500)]: {
      margin: "3.8%",
      marginLeft: "3.6%",
      marginTop: "2.3%",
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down(1281)]: {
      marginLeft: "114px!important"
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: "72px!important"
    },
    [theme.breakpoints.down("sm")]: {
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "scroll",
      overflowX: "hidden",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      backgroundColor: "white!important",
      paddingLeft: "0",
      transform: `translate3d(${243}px, 0, 0)`,
      ...transition
    }
  },
  logo: {
    position: "relative",
    padding: "16px 0px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",

      height: "0px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
  },
  logoLink: {
    ...defaultFont,
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: "black"
    }
  },
  logoImage: {
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px"
  },
  img: {
    width: "35px",
    top: "18px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#000",
      opacity: ".8"
    }
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset",
    fontFamily: "Avenir"
  },
  item: {
    position: "relative",
    display: "block",
    padding: "0px",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: "#a9a9a9"
    }
  },
  itemLink: {
    width: "auto",
    height: "35px",
    transition: "all 300ms linear",
    margin: "1px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "1px 15px",
    marginLeft: "-5em",
    backgroundColor: "transparent",
    ...defaultFont
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginLeft: "30px",
    marginTop: "10px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#a9a9a9"
  },
  itemText: {
    ...defaultFont,
    marginTop: "2px",
    marginLeft: "15px",
    lineHeight: "30px",
    fontSize: "16px",
    paddingLeft: "36px !important",
    color: "#14171a",
    fontFamily: "helvetica"
  },
  whiteFont: {
    color: "#000!important"
  },
  purple: {
    backgroundColor: primaryColor,
    ...primaryBoxShadow,
    "&:hover": {
      backgroundColor: primaryColor,
      ...primaryBoxShadow
    }
  },
  blue: {
    backgroundColor: "#fff",
    color: "black!important",
    fontWeight: "600!important",
    "&:hover": {
      backgroundColor: "#fff"
      // boxShadow:
      //   "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
    },
    [theme.breakpoints.down(601)]: {
      backgroundColor: "#f2f2f2!important"
    }
  },
  green: {
    backgroundColor: successColor,
    boxShadow:
      "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)",
    "&:hover": {
      backgroundColor: successColor,
      boxShadow:
        "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
    }
  },
  orange: {
    backgroundColor: warningColor,
    boxShadow:
      "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)",
    "&:hover": {
      backgroundColor: warningColor,
      boxShadow:
        "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)"
    }
  },
  red: {
    backgroundColor: dangerColor,
    boxShadow:
      "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)",
    "&:hover": {
      backgroundColor: dangerColor,
      boxShadow:
        "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    cursor: "default!important",
    overflowScrolling: "touch",
    marginTop: "-6em"
  },
  activePro: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "100%",
      bottom: "13px"
    }
  },
  active: {
    fontWeight: "600 !important"
  }
});

export default sidebarStyle;
