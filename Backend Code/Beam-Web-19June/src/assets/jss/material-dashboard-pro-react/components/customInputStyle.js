import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";

const customInputStyle = theme =>  ({
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: grayColor[4] + "!important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor[0]
    },
    "& + p": {
      fontWeight: "300"
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor[0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor[0]
    }
  },
  labelRoot: {
    ...defaultFont,
    color: grayColor[3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRootError: {
    color: dangerColor[0] + " !important"
  },
  labelRootSuccess: {
    color: successColor[0] + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    verticalAlign: "unset",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: grayColor[14]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      backgroundColor: whiteColor
    },
    "&:after": {
      backgroundColor: whiteColor
    }
  },
  input: {
    color: "black",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "15px",
      fontFamily: "Helvetica",
      fontWeight: "500",
      lineHeight: "1.42857",
      opacity: "1",
    },
    [theme.breakpoints.up('1900')]:{
      "&::placeholder": {
        color: "#696969",
        fontSize: "18px",
      }
    },
    "&::placeholder": {
      color: "#696969"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: whiteColor,
      opacity: "1"
    }
  }
});

export default customInputStyle;
