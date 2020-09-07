import {
  container,
  cardTitle,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";
import { blackColor } from "assets/jss/material-dashboard-pro-react";

const loginPageStyle = theme => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  btnSignup: {
    backgroundColor: whiteColor,
    border: '1px solid #3d76bd',
    color: "#3d76bd" ,
    outline: "0px",
    width: '50%',
    "&:hover": {
      backgroundColor: whiteColor,
      color: '#3d76bd'
    },
  },
  btnContinue: {
    backgroundColor: '#3d76bd',
    color: whiteColor ,
    outline: "0px",
    width: '80%',
    "&:hover": {
      backgroundColor: "#3d76bd"
    },
  },
  cardTitle: {
    ...cardTitle,
    fontSize: '2.5rem', 
    fontWeight: '2rem',
    display: 'flex',
    fontWeight: 500,
    marginTop: '1em',
    justifyContent: 'center',
    color: blackColor
  },
  textCenter: {
    textAlign: "center"
  },
  justifyContentCenter: {
    justifyContent: "center !important"
  },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: whiteColor
    },
    marginLeft: "5px",
    marginRight: "5px"
  },
  inputAdornment: {
    marginRight: "18px"
  },
  inputAdornmentIcon: {
    color: grayColor[6]
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  cardHeader: {
    marginBottom: "20px"
  },
  socialLine: {
    padding: "0.9375rem 0"
  }
});

export default loginPageStyle;
