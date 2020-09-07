import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TitleIcon from "@material-ui/icons/Title";
import Check from "@material-ui/icons/Check";

// core components
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import SignInIllustration from "assets/img/Signin_illustration.png";

import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import "./style.css";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

import registerUserQuery from "../../queries/Register.js";
import getCompaniesQuery from "../../queries/getCompanies.js";
import client from "../../connection.js";

function RegisterPage(props) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [checkedManager, setCheckedManager] = useState(false);
  const [checkedTC, setCheckedTC] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [companies, setCompanies] = useState([]);

  const handleChange = e => {
    let fields_data = fields;
    fields_data[e.target.name] = e.target.value;
    setFields(fields_data);
  };

  const getCompanies = () => {
    client
      .query({
        query: getCompaniesQuery
      })
      .then(result => {
        setCompanies(result.data.companies);
      });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!fields.name) {
      formIsValid = false;
      errors["name"] = "Please fill in this field.";
    } else {
      errors["name"] = "";
    }
    if (!fields.title) {
      formIsValid = false;
      errors["title"] = "Please fill in this field.";
    } else {
      errors["title"] = "";
    }
    if (!fields.username) {
      formIsValid = false;
      errors["username"] = "Please fill in this field.";
    } else {
      errors["username"] = "";
    }
    if (!fields.email) {
      formIsValid = false;
      errors["email"] = "Please fill in this field.";
    } else {
      errors["email"] = "";
    }
    if (typeof fields.email !== "undefined") {
      var pattern = new RegExp(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/
      );
      if (!pattern.test(fields.email)) {
        formIsValid = false;
        errors["email"] = "Please enter valid email address.";
      } else {
        errors["email"] = "";
      }
    }
    if (!fields.password) {
      formIsValid = false;
      errors["password"] = "Please fill in this field.";
    } else {
      errors["password"] = "";
    }
    if (!fields.confirm_password) {
      formIsValid = false;
      errors["confirm_password"] = "Please fill in this field.";
    } else {
      errors["confirm_password"] = "";
    }
    if (fields.confirm_password != fields.password) {
      formIsValid = false;
      errors["confirm_password"] = "Please enter the same password";
    } else {
      errors["confirm_password"] = "";
    }
    if (!fields.company) {
      formIsValid = false;
      errors["company"] = "Please select the category.";
    } else {
      errors["company"] = "";
    }
    if (!checkedTC) {
      formIsValid = false;
      errors["termsCheck"] =
        "Please agree to our Terms & Conditions and Privacy Policy";
    } else {
      errors["termsCheck"] = "";
    }
    setErrors(errors);
    return formIsValid;
  };

  const registerUser = () => {
    if (validateForm()) {
      client
        .mutate({
          variables: {
            username: fields.username,
            name: fields.name,
            last_name: fields.name,
            email: fields.email,
            title: fields.title,
            is_manager: checkedManager,
            company_name: fields.company
          },
          mutation: registerUserQuery
        })
        .then(result => {
          sessionStorage.setItem(
            "company_name",
            result.data.insert_users.returning[0].company_handle
          );
          sessionStorage.setItem(
            "email",
            result.data.insert_users.returning[0].email
          );
          sessionStorage.setItem(
            "username",
            result.data.insert_users.returning[0].username
          );
          sessionStorage.setItem(
            "name",
            result.data.insert_users.returning[0].name
          );
          sessionStorage.setItem(
            "last_name",
            result.data.insert_users.returning[0].last_name
          );
          sessionStorage.setItem("updates_count", 0);
          props.history.push("/updates");
        });
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const classes = props.classes;

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card className={classes.cardSignup}>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={7}>
                  <h2 className={classes.cardTitle}>Sign Up</h2>
                  <form id="signupForm" className={classes.form}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        onChange: handleChange,
                        name: "username",
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <AccountCircleIcon
                              className={classes.inputAdornmentIcon}
                            />
                          </InputAdornment>
                        ),
                        placeholder: "User Name"
                      }}
                    />
                    <br />
                    <span className={classes.errorMsg}>{errors.username}</span>
                    <br />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        onChange: handleChange,
                        name: "name",
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <PersonOutlineIcon
                              className={classes.inputAdornmentIcon}
                            />
                          </InputAdornment>
                        ),
                        placeholder: "Name"
                      }}
                    />
                    <br />
                    <span className={classes.errorMsg}>{errors.name}</span>
                    <br />
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
                        placeholder: "Email"
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
                        name: "title",
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <TitleIcon className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Title"
                      }}
                    />
                    <br />
                    <span className={classes.errorMsg}>{errors.title}</span>
                    <br />

                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        onChange: handleChange,
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
                                className={classes.inputAdornmentIcon}
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                className={classes.inputAdornmentIcon}
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                }}
                              />
                            )}
                          </InputAdornment>
                        ),
                        type: showPassword ? "text" : "password",
                        placeholder: "Password"
                      }}
                    />
                    <br />
                    <span className={classes.errorMsg}>{errors.password}</span>
                    <br />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        onChange: handleChange,
                        name: "confirm_password",
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
                            {showConfirmPassword ? (
                              <VisibilityIcon
                                className={classes.inputAdornmentIcon}
                                onClick={() => {
                                  setShowConfirmPassword(!showConfirmPassword);
                                }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                className={classes.inputAdornmentIcon}
                                onClick={() => {
                                  setShowConfirmPassword(!showConfirmPassword);
                                }}
                              />
                            )}
                          </InputAdornment>
                        ),
                        type: showConfirmPassword ? "text" : "password",
                        placeholder: "Confirm Password"
                      }}
                    />
                    <br />
                    <span className={classes.errorMsg}>
                      {errors.confirm_password}
                    </span>
                    <br />
                    <br />
                    <FormControl
                      fullWidth
                      className={classes.customFormControlClasses}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Company
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        name="company"
                        value={fields.company}
                        onChange={handleChange}
                        inputProps={{
                          id: "simple-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Choose Company
                        </MenuItem>

                        {companies.map(function(company, i) {
                          return (
                            <MenuItem
                              key={i}
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value={company.handle}
                            >
                              {company.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>

                    <span className={classes.errorMsg}>{errors.company}</span>
                    <br />
                    <FormControlLabel
                      classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onChange={() => {
                            setCheckedManager(!checkedManager);
                          }}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      label={
                        <span className={classes.checkboxText}>
                          Are you a Manager.
                        </span>
                      }
                    />
                    <br />
                    <FormControlLabel
                      classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onChange={() => {
                            setCheckedTC(!checkedTC);
                          }}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      label={
                        <span className={classes.checkboxText}>
                          I agree to the{" "}
                          <a style={{ color: "black" }}>Terms & Condition</a>{" "}
                          and <a>Privacy Policy.</a>
                        </span>
                      }
                    />
                    <br />
                    <span className={classes.errorMsg}>
                      {errors.termsCheck}
                    </span>
                    <div className={classes.center}>
                      <Button
                        round
                        className={classes.btnContinue}
                        onClick={() => {
                          registerUser();
                        }}
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
                          props.history.push("/auth/login");
                        }}
                      >
                        Sign In
                      </Button>
                    </div>
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
                    src={SignInIllustration}
                    style={{ width: "100%" }}
                    className="img-responsive"
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
RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(RegisterPage));
