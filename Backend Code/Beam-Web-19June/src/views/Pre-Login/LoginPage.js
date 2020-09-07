import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons

import Email from "@material-ui/icons/Email";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import LogInIllustration from "assets/img/Login_Illustrion.png";

import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import "./style.css";
import loginUserQuery from "../../queries/Login.js";
import client from "../../connection.js";

function LoginPage(props) {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    let fieldValue = fields;
    fieldValue[e.target.name] = e.target.value
    setFields(fieldValue);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (typeof fields.email !== "undefined") {
      var pattern = new RegExp(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/
      );
      if (!pattern.test(fields.email.trim())) {
        formIsValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    
    if (typeof fields.email !== "undefined") {
      var patternSpace = new RegExp(/^(?!^ +$)^.+$/);
      if (!patternSpace.test(fields.email)) {
        formIsValid = false;
        errors["email"] = "Cannot accept only spaces.";
      }
    }
   
    if (!fields.email) {
      formIsValid = false;
      errors["email"] = "Please fill in this field.";
    }

    if (typeof fields.password !== "undefined") {
      var patternSpace = new RegExp(/^(?!^ +$)^.+$/);
      if (!patternSpace.test(fields.password)) {
        formIsValid = false;
        errors["password"] = "Cannot accept only spaces.";
      }
    }
    
    if (!fields.password) {
      formIsValid = false;
      errors["password"] = "Please fill in this field.";
    }
    setErrors(errors);
    return formIsValid;
  };

  const loginUser = () => {
    if (validateForm()) {
      client
        .mutate({
          variables: { username: fields.email, password: fields.password },
          mutation: loginUserQuery
        })
        .then(() => {
          sessionStorage.setItem("updates_count", 0);
          props.history.push("/updates");
        });
    }
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") loginUser();
  };
  const classes = props.classes;

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card className={classes.cardSignup}>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={7}>
                  {window.innerWidth > 1900 && (
                    <div>
                      <br />
                      <br />
                    </div>
                  )}
                  <h2 className={classes.cardTitle}>Login</h2>
                  {window.innerWidth > 1900 && (
                    <div>
                      <br />
                    </div>
                  )}
                  <h5 className={classes.titleText}>
                    Please login to your account
                  </h5>
                  {window.innerWidth > 1900 && (
                    <div>
                      <br />
                      <br />
                    </div>
                  )}
                  <form id="loginForm">
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        onChange: handleChange,
                        name: "email",
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email..."
                      }}
                      type="email"
                    />
                    <br />
                    <span className={classes.errorMsg}>{errors.email}</span>
                    <br />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        onChange: handleChange,
                        onKeyPress: handleKeyPress,
                        name: "password",
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Icon className={classes.inputAdornmentIcon}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            {showPassword ? (
                              <VisibilityIcon
                                style={{ cursor: "pointer" }}
                                className={classes.inputAdornmentIcon}
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                style={{ cursor: "pointer" }}
                                className={classes.inputAdornmentIcon}
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                }}
                              />
                            )}
                          </InputAdornment>
                        ),
                        type: showPassword ? "text" : "password",
                        placeholder: "Password..."
                      }}
                    />
                    <br />
                    <span className={classes.errorMsg}>{errors.password}</span>
                    <br />
                    <span
                      className={classes.forgotPassword}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        props.history.push("/auth/forgot-password");
                      }}
                    >
                      Forgot Password?
                    </span>
                    {window.innerWidth > 1900 && (
                      <div>
                        <br />
                        <br />
                        <br />
                      </div>
                    )}
                    <br />
                    <br />
                    {window.innerWidth > 1900 && (
                      <div>
                        <br />
                        <br />
                        <br />
                      </div>
                    )}
                    <div className={classes.center}>
                      <Button
                        round
                        className={classes.btnContinue}
                        onClick={loginUser}
                      >
                        Continue
                      </Button>
                    </div>
                    <hr />
                    <div className={classes.center}>
                      <Button
                        round
                        className={classes.btnSignup}
                        onClick={() => {
                          props.history.push("/auth/register");
                        }}
                      >
                        Sign Up
                      </Button>
                    </div>
                    <br />
                    <br />
                  </form>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={5}
                  className={classes.secondColumn}
                >
                  <br />
                  <br />
                  <img
                    src={LogInIllustration}
                    
                    className={classes.LogInIllustration}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(LoginPage));
