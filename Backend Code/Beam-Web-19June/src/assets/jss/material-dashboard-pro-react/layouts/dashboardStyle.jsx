import { transition, container } from "assets/jss/material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    backgroundColor: "#e6ecf0"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-3.3%",
      width: `92.5%`,
      marginRight: "0%"
    },
    overflow: "hidden",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    // padding: "30px 15px",
    paddingLeft: "25%",
    minHeight: "calc(100vh - 123px)",
    [theme.breakpoints.down(801)]: {
      paddingLeft: "0%"
    }
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
