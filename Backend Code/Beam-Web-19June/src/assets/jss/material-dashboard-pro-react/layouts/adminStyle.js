import {
  drawerMiniWidth,
  transition,
  containerFluid
} from "assets/jss/material-dashboard-pro-react.js";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    "&:after": {
      display: "table",
      clear: "both",
      content: '" "'
    }
  },
  mainPanel: {
    backgroundColor: "#edf2f7",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    [theme.breakpoints.up("md")]: {
      width: "100%"
    },
    // overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "57px",
    paddingLeft: "384px",
    minHeight: "calc(100vh - 123px)",

    [theme.breakpoints.down(1441)]: {
      paddingLeft: "384px"
    },
    [theme.breakpoints.down(1381)]: {
      paddingLeft: "368px"
    },
    [theme.breakpoints.down(1281)]: {
      paddingLeft: "352px"
    },
    [theme.breakpoints.down(1025)]: {
      paddingLeft: "310px"
    },
    [theme.breakpoints.down(960)]: {
      paddingLeft: "28px"
    },
    [theme.breakpoints.down(801)]: {
      paddingLeft: "40px"
    },
    [theme.breakpoints.down(601)]: {
      paddingLeft: "4px"
    }
    // [theme.breakpoints.up(1900)]: {
    //   paddingLeft: "17.5%"
    // },
    // [theme.breakpoints.up(2500)]: {
    //   paddingLeft: "17%"
    // }
  },
  container: { ...containerFluid },
  map: {
    marginTop: "70px"
  },
  mainPanelSidebarMini: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerMiniWidth}px)`
    }
  },
  mainPanelWithPerfectScrollbar: {
    overflow: "hidden !important"
  }
});

export default appStyle;
