import {
  container,
  cardTitle,
  blackColor,
  hexToRgb,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import { whiteColor } from "assets/jss/material-dashboard-pro-react";

const registerPageStyle = theme =>  ({
  questionMark: {
    fontSize: 78, fontWeight: 700, position: 'absolute', color: '#3D76BC', top: '1.2em', left: '10.4em',
    [theme.breakpoints.up(1900)]: {
      left: '15.4em'
    },
    [theme.breakpoints.down(601)]: {
      left: '3.4em',
      top: '8.2em'
    },
    [theme.breakpoints.down(421)]: {
      left: '1.6em',
      top: '7.8em'
    }
  },
  ...customCheckboxRadioSwitch,
  errorMsg: {
    color: 'red',
    fontSize: 13,
    fontWeight: 500,
    fontFamily: 'helvetika',
    marginLeft: "88px",
    [theme.breakpoints.up(1900)]: {
      fontSize: 16
    }
  },
  cardTitle: {
    ...cardTitle,
    fontFamily: 'Helvetica !important', 
    textAlign: "center",
    paddingTop: '40px',
  },
  selectLabel: {
    fontSize: "15px",
    textTransform: "capitalized",
    color: "696969 !important",
    [theme.breakpoints.up(1900)]: {
      fontSize: "19px",
    }
  },
  secondColumn: {
    borderLeft: '1px solid #a6a6a6',
    [theme.breakpoints.down(801)]: {
      borderLeft: "0px"
    }
  },
  container: {
    ...container,
    position: "relative",
    zIndex: "3",
    // backgroundColor: 'grey',
    // paddingTop: "23vh"
  },
  forgotPassword: {
    color: '#3d76bd',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '14px',
    marginRight: '70px',
    fontFamily:'Helvetica',
    marginTop: '2%',
    fontWeight: '500',
    [theme.breakpoints.up(1900)]: {
      fontSize: '18px'
    },
    [theme.breakpoints.down(421)]: {
      marginRight: 28
    }
  },
  LogInIllustration: {
    width: '100%',
    height: '90%',
    paddingLeft:'10%',
    [theme.breakpoints.down(421)]: {
      height: '84%'
    }
  },
  btnContinue: {
    backgroundColor: '#3d76bd',
    color: whiteColor ,
    outline: "0px",
    height: 40,
    width: '45%',
    "&:hover": {
      backgroundColor: "#3d76bd"
    },
    [theme.breakpoints.down(421)]: {
      width: '80%'
    }
  },
  btnSignup: {
    backgroundColor: whiteColor,
    border: '1px solid #3d76bd',
    color: "#3d76bd" ,
    outline: "0px",
    height: 40,
    width: '45%',
    "&:hover": {
      backgroundColor: whiteColor,
      color: '#3d76bd'
    },
    "&:after, &:focus": {
      backgroundColor: "#fff!important",
      color: '#3d76bd'
    },
    [theme.breakpoints.down(421)]: {
      width: '80%'
    }
  },
  cardSignup: {
    borderRadius: "20px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    padding: "0px 0px",
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  form: {
    padding: "0 20px",
    position: "relative"
  },
  socialTitle: {
    fontSize: "18px"
  },
  inputAdornment: {
    marginRight: "18px",
    position: "relative"
  },
  inputAdornmentIcon: {
    color: grayColor[6],
    fontSize: '2em !important'
  },
  customFormControlClasses: {
    margin: '0 66px',
    fontSize: '15px',
    paddingRight: '100px',
    "&:placeholder": {
      fontSize: 15, 
      color: 'black !important'
    },
    [theme.breakpoints.down(801)] :{
      margin: '0px 0px',
      paddingRight: 0
    },
    [theme.breakpoints.down(421)] :{
      margin: '0px 26px',
      paddingRight: 35
    }
  },
  checkboxLabelControl: {
    margin: "0"
  },
  checkboxLabel: {
    fontSize: "0.875rem",
    marginLeft: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)"
  },
  checkboxText: {
    fontSize: '1.4rem',
    color: 'black'
  },
  titleText: {
    color: 'grey',
    fontFamily: 'Helvetica',
    textAlign: 'capitalize',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default registerPageStyle;
