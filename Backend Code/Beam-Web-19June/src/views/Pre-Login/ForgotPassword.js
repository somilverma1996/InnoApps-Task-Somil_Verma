import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import forgotPasswordIllustration from "assets/img/Forgot_passowrd_illustration.png";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import "./style.css";
import resetPassword from "../../queries/ForgotPassword.js";
import client from "../../connection.js";

function ForgotPassword(props) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const validateOtpForm = () => {

  //   let formIsValid = true

  //   console.log(fields.email)
  //   console.log("SIM")
  //   if (!fields.otp) {
  //     formIsValid = false
  //     errors['otp'] = "Please fill out this field."
  //   }
  //   if (typeof fields.email !== "undefined") {
  //     var pattern = new RegExp(/^(?!^ +$)^.+$/)
  //     if (!pattern.test(fields.email)) {
  //       formIsValid = false;
  //       errors["otp"] = "Cannot accept only spaces.";
  //     }
  //   }

  //   setErrors(errors)

  //   return formIsValid

  // }
  const handleStep2 = () => {
    // if (validateOtpForm) {
    setStep1(false);
    setStep2(true);
    setStep3(false);
    // }
  };
  const handleChange = e => {
    let fields_data = fields;
    fields_data[e.target.name] = e.target.value
    setFields(fields_data);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    
    if (typeof fields.email !== "undefined") {
      var pattern = new RegExp(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/
      );
      if (!pattern.test(fields.email)) {
        formIsValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    if (typeof fields.email !== "undefined") {
      var patternSpaces = new RegExp(/^(?!^ +$)^.+$/)
      if (!patternSpaces.test(fields.email)) {
        formIsValid = false;
        errors["email"] = "Cannot accept only spaces.";
      }
    }

    if (!fields.email) {
      formIsValid = false;
      errors["email"] = "Please fill in this field.";
    }
    setErrors(errors);
    return formIsValid;
  };

  const forgotPassword = () => {
    if (validateForm()) {
      client
        .mutate({
          variables: {
            email: fields.email
          },
          mutation: resetPassword
        })
        .then(result => {
          if (result.data.reset_password.success) {
            console.log("Here");
            props.history.push("/auth/login");
          }
        });
      // setStep1(false);
      // setStep2(true);
      // setStep3(false);
    }
  };

  const handleKeyPress = () => {
    // if (e.key == "Enter")
    //   loginUser()
  };

  const handleKeyPressStep1 = e => {
    if (e.key === "Enter") {
      forgotPassword();
    }
  };

  const classes = props.classes;
  return (
    <div className={classes.container}>
      <br />
      <i className="fa fa-arrow-left backIcon"
          onClick={() => {
          props.history.push("/auth/login");
        }}
      />
      <br />
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card className={classes.cardSignup}>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={7}>
                  {step2 && (
                    <KeyboardBackspaceIcon
                      onClick={() => {
                        setStep1(true);
                        setStep2(false);
                        setStep3(false);
                      }}
                      style={{ marginTop: "1.2em", fontSize: "3em!important" }}
                    />
                  )}
                  {step3 && (
                    <KeyboardBackspaceIcon
                      onClick={() => {
                        setStep1(false);
                        setStep2(true);
                        setStep3(false);
                      }}
                      style={{ marginTop: "1.2em", fontSize: "3em!important" }}
                    />
                  )}
                  <h2 className={classes.cardTitle}>Forgot Password</h2>
                  {step1 && (
                    <div>
                      {window.innerWidth > 1900 && (
                        <div>
                          <br />
                        </div>
                      )}
                      <h5 className={classes.titleText}>
                        Enter your email. We will send you a code
                      </h5>
                      {window.innerWidth > 1900 && (
                        <div>
                          <br />
                          <br />
                          <br />
                        </div>
                      )}
                      {/* <form className={classes.form}> */}
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          onKeyPress: handleKeyPressStep1,
                          onChange: handleChange,
                          name: "email",
                          // value: fields.email,
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
                          onClick={forgotPassword}
                        >
                          Yes, send me a code
                        </Button>
                      </div>
                    </div>
                  )}

                  {step2 && (
                    <div>
                      {window.innerWidth > 1900 && (
                        <div>
                          <br />
                        </div>
                      )}
                      <h5 className={classes.titleText}>
                        We sent you the code. Enter the code and reset your
                        password
                      </h5>
                      {window.innerWidth > 1900 && (
                        <div>
                          <br />
                          <br />
                          <br />
                        </div>
                      )}
                      {/* <form className={classes.form}> */}
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          value: fields.otp,
                          onChange: handleChange,
                          onKeyPress: handleKeyPress,
                          name: "otp",
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
                              {/* <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon> */}
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
                          placeholder: "OTP..."
                        }}
                      />
                      <br />
                      <span className={classes.errorMsg}>{errors.otp}</span>

                      <br />
                      <br />
                      <br />
                      <div className={classes.center}>
                        <Button
                          round
                          className={classes.btnContinue}
                          onClick={handleStep2}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {step3 && (
                    <div>
                      <h5 className={classes.titleText}>
                        Enter your new password
                      </h5>
                      {/* <form className={classes.form}> */}
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          value: fields.password,
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
                              {/* <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon> */}
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
                      <span className={classes.errorMsg}>
                        {errors.password}
                      </span>
                      <br />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          onChange: handleChange,
                          onKeyPress: handleKeyPress,
                          name: "confirm_password",
                          value: fields.confirm_password,
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
                              {/* <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon> */}
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
                          placeholder: "Confirm Password..."
                        }}
                      />
                      <span className={classes.errorMsg}>
                        {errors.confirm_password}
                      </span>
                      <br />

                      <br />
                      <br />
                      <div className={classes.center}>
                        <Button
                          round
                          className={classes.btnContinue}
                          onClick={forgotPassword}
                        >
                          Yes, send me a code
                        </Button>
                      </div>
                    </div>
                  )}

                  <hr />

                  {/* <br /> */}
                  {/* </form> */}
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
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={5}
                  className={classes.secondColumn}
                >
                  <br />
                  <br />
                  {step1 && (
                    <div>
                      <span className={classes.questionMark}>?</span>
                      <img
                        src={forgotPasswordIllustration}
                        style={{ paddingLeft: '4%', position: "relative" }}
                        className="img-responsive"
                      />
                    </div>
                  )}
                  {step2 && (
                    <div>
                      {/* <span style={{ fontSize: 78, fontWeight: 700, position: 'absolute', color: '#3D76BC', top: '1.2em', left: '10.4em' }}>?</span> */}
                      <img
                        src={step2}
                        style={{ paddingLeft: '4%', position: "relative" }}
                        className="img-responsive"
                      />
                    </div>
                  )}
                  {step3 && (
                    <div>
                      {/* <span style={{ fontSize: 78, fontWeight: 700, position: 'absolute', color: '#3D76BC', top: '1.2em', left: '10.4em' }}>?</span> */}
                      <img
                        src={step3}
                        style={{ paddingLeft: '4%', position: "relative" }}
                        className="img-responsive"
                      />
                    </div>
                  )}
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ForgotPassword));
