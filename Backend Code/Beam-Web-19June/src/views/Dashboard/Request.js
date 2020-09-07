/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { Avatar, Paper } from "@material-ui/core";
import profile_picture from "assets/img/profile_picture.png";
import { withRouter } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Button from "@material-ui/core/Button";
import people from "assets/img/people black 14x14.png";
import linkedin from "assets/img/linkedin 22x22.png";
import email from "assets/img/email 18x18.png";
import phone from "assets/img/mobile 17x17.png";
import globe from "assets/img/globe 17x17.png";
import info from "assets/img/info 17x17.png";
import location from "assets/img/location 17x17.png";
import "./abc.css";
import network_grey from "assets/img/Network_grey.png";
import client from "../../connection.js";
import loader from "assets/img/loader.gif";
import getCompanyInvestorsQuery from "../../queries/getCompanyInvestors.js";
// import getCompaniesQuery from "queries/getCompanies";

const styles = theme => ({
  paddingDetails: {
    padding: "8px 0px 0px!important"
  },
  scroll: {
    marginLeft: "0px",
    overflowY: "scroll",
    overflowX: "hidden",
    height: 500,
    [theme.breakpoints.up(1400)]: {
      height: 790
    },
    [theme.breakpoints.up(1900)]: {
      height: 900
    },
    [theme.breakpoints.down(1381)]: {
      height: 550
    },
    [theme.breakpoints.down(601)]: {
      height: "auto"
      // overflowY:
    }
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center",
    paddingLeft: "3.7%!important"
  },
  column: {
    flexBasis: "100%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  expansionPanelPaper: {
    width: "100%",
    height: "auto!important",
    paddingBottom: "20px!important",
    boxShadow: "none",
    marginTop: "1%!important",
    [theme.breakpoints.down(801)]: {
      width: "98% "
    },
    [theme.breakpoints.down(801)]: {
      width: "94% "
    }
  },
  body1: {
    backgroundColor: "#E8F1FC",
    height: 130,
    width: "100%",
    marginBottom: "2%",
    [theme.breakpoints.up(1900)]: {
      width: "100%"
    },
    [theme.breakpoints.down(801)]: {
      width: "98%"
    },
    [theme.breakpoints.down(769)]: {
      width: "94%"
    }
  },
  postBtn: {
    marginRight: "11.5em",
    [theme.breakpoints.up(1900)]: {
      marginRight: "24.2em"
    },
    [theme.breakpoints.down(801)]: {
      marginRight: "2.5em"
    },
    [theme.breakpoints.down(769)]: {
      marginRight: "4.5em"
    }
  },
  txtField: {
    width: "70em",
    [theme.breakpoints.up(1900)]: {
      width: "108em"
    }
  },
  body2: {
    display: "flex",
    marginRight: "6em",
    marginTop: "-6em",
    justifyContent: "flex-end",
    [theme.breakpoints.up(1900)]: {
      marginTop: "-8em"
    }
  },
  perspective: {
    color: "#657786",
    fontFamily: "Helvetica",
    fontSize: 16,
    marginRight: 10,
    display: "none",
    fontWeight: 400
  },
  viewInsights: {
    color: "#1560BD",
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: "normal"
  },
  input: {
    color: "#14171a",
    height: "4em",
    marginTop: "10px",
    fontSize: "14px !important",
    "&::placeholder": {
      fontSize: "14px !important",
      color: "#14171a",
      fontWeight: "510",
      lineHeight: "2rem",
      fontFamily: "inter"
    }
  }
});

function Request(props) {
  const [investors, setInvestors] = useState([]);
  const [showLoader, setLoader] = useState(true);
  const [fields, setFields] = useState({});
  const [post] = useState("");
  const [postError] = useState("");
  // eslint-disable-next-line react/prop-types
  const [show, setShow] = useState(props.show);
  const [showData, setShowData] = useState(props.show);

  const getMyNetwork = () => {
    console.log(sessionStorage.getItem("company_name"));
    client
      .query({
        query: getCompanyInvestorsQuery,
        variables: { companyName: sessionStorage.getItem("company_name") }
      })
      .then(result => {
        setInvestors(result.data.company_investors);
        setLoader(false);
      });
  };

  useEffect(() => {
    console.log("Props = ", props);
    console.log("Show = ", props.show);
    setShow(true);
    // props.show ? setShow(true) : setShow(false)
    console.log("after set show func", show);
    getMyNetwork();
  }, [props.show]);

  const handleChange = e => {
    fields[e.target.name] = e.target.value;
    setFields(fields);
  };

  const setShowChange = () => {
    setShowData(!showData);
  };

  const handleClose2 = () => { };

  const handleClick = () => { };

  const handleVideoChange = () => { };

  const { classes } = props;

  return (
    <div className={classes.scroll}>
      <div>
        {show ? (
          <div style={{ display: "none" }} className={classes.body1}>
            <div
              className="d-flex"
              style={{ margin: "12px 15px", paddingTop: "16px" }}
            >
              <input
                className="fileInput"
                type="file"
                accept="image/*"
                id="file_image"
                style={{ display: "none" }}
                onChange={e => handleVideoChange(e)}
              />
              <TextField
                class="descField MuiFormControl-root"
                id="description"
                variant="outlined"
                fullWidth
                style={{ width: "100%" }}
                placeholder="Invite a member"
                multiline
                onChange={handleChange.bind(this)}
                value={post}
                name="post"
                rows={3}
                InputProps={{ classes: { input: props.classes["input"] } }}
              />
              <br />
            </div>

            <span
              style={{
                color: "red",
                fontFamily: "helvetica",
                fontSize: 12,
                marginLeft: 75
              }}
            >
              {postError}
            </span>
            <br />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={handleClick}
                style={{
                  outline: 0,
                  marginRight: 15,
                  padding: "0px 10px",
                  width: 70,
                  height: 33,
                  backgroundColor: "#1560bd",
                  fontSize: 16,
                  color: "white",
                  borderRadius: "30px",
                  marginTop: "-23px"
                }}
              >
                Invite
              </Button>
            </div>
          </div>
        ) : (
            <span>ssddsdsdsdsdsd</span>
          )}
        <div className="requestWidth row">
          <div className="col-md-6">
            {investors.map(function (investor) {
              return (
                <ExpansionPanel
                  key={1}
                  defaultExpanded
                  className={classes.expansionPanelPaper}
                >
                  <ExpansionPanelDetails
                    className={classes.details}
                    style={{ padding: "8px 24px 0px!important" }}
                  >
                    <div className={classes.column}>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        <div className="row">
                          <div className="col-lg-2">
                            <Avatar
                              alt="Profile Picture"
                              style={{
                                marginTop: "5px",
                                cursor: "pointer",
                                marginLeft: 3,
                                width: 55,
                                height: 55
                              }}
                              src={profile_picture}
                              className={classes.avatar}
                            />
                          </div>
                          <div
                            className="col-lg-10 lg-101"
                            style={{
                              marginBottom: "-10px",
                              marginTop: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                // justifyContent: "space-between",
                                lineHeight: "15px"
                              }}
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={setShowChange}
                              >
                                <b
                                  style={{
                                    width: "120px",
                                    fontSize: 12,
                                    color: "#14171a",
                                    fontFamily: "Helvetica"
                                  }}
                                >
                                  {investor.user.first_name}
                                  {investor.user.last_name}{" "}
                                  <span
                                    style={{
                                      color: "#657786",
                                      fontWeight: "normal",
                                      fontFamily: "Helvetica",
                                      fontSize: 12
                                    }}
                                  >
                                    @{investor.user.username}
                                  </span>{" "}
                                </b>
                              </div>
                              <img src={network_grey} height="12px" style={{ marginLeft: 30 }} />
                              {/* <span className={classes.perspective}>
                                Prospective
                              </span> */}
                            </div>
                            <br />
                            <p
                              className=""
                              style={{
                                fontSize: "12px",
                                margin: "-13px 0 10px",
                                color: "#657786",
                                display: "flex",
                                fontFamily: "Helvetica",
                                fontWeight: "normal"
                              }}
                            >
                              <b
                                style={{ color: "#657786", fontWeight: "bold" }}
                              >
                                {investor.company.name}
                              </b>{" "}
                              <span>
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    fontSize: 2,
                                    verticalAlign: "middle",
                                    margin: "0px 6px"
                                  }}
                                ></i>
                              </span>
                              Fund of Hedge Funds
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                lineHeight: "0px"
                              }}
                            >
                              <p
                                className=""
                                style={{
                                  fontSize: "14px",
                                  color: "#14171a",
                                  fontWeight: "normal"
                                }}
                              >
                                Head of Hedge Funds Research{" "}
                              </p>
                              <span className={classes.viewInsights}>
                                View insights
                              </span>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            })}
            {/* {investors.map(function (investor, i) {
              return (
                <ExpansionPanel
                  key={i}
                  id="request"
                  defaultExpanded
                  className={classes.expansionPanelPaper}
                >
                  <ExpansionPanelDetails
                    classes={{
                      root: classes.paddingDetails
                    }}
                  >
                    <div className={classes.column}>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        <div className="col-lg-2">
                          <Avatar
                            alt="Profile Picture"
                            style={{
                              width: "58px",
                              height: "58px",
                              marginTop: "5px",
                              cursor: "default",
                              marginLeft: 3
                            }}
                            src={profile_picture}
                            className={classes.avatar}
                          />
                        </div>
                        <div
                          className="col-lg-10"
                          style={{
                            marginBottom: "-10px",
                            marginTop: 12,
                            marginLeft: -20
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              lineHeight: "15px"
                            }}
                          >
                            <div style={{ cursor: "pointer" }} onClick={setShowChange}>
                              <b
                                style={{
                                  width: "120px",
                                  fontSize: 14,
                                  fontFamily: "Helvetica",
                                  color: "#14171a",
                                  fontWeight: "bold"
                                }}
                              >
                                {investor.user.first_name}{" "}
                                {investor.user.last_name}{" "}
                                <span
                                  style={{
                                    color: "#657786",
                                    fontWeight: 500,
                                    fontFamily: "Helvetica"
                                  }}
                                >
                                  @{investor.user.username}
                                </span>{" "}
                              </b>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between"
                            }}
                          >
                            <p
                              className=""
                              style={{
                                fontSize: "14px",
                                margin: "-8px 0 10px",
                                color: "#14171a",
                                fontFamily: "Helvetica"
                              }}
                            >
                              <b
                                style={{
                                  color: "#657786",
                                  fontWeight: "bold",
                                  fontFamily: "Helvetica"
                                }}
                              >
                                {investor.company.name}
                              </b>{" "}
                              <span
                                style={{
                                  lineHeight: "3rem",
                                  verticalAlign: "super",
                                  fontWeight: "normal",
                                  fontSize: 14,
                                  fontFamily: "Helvetica",
                                  color: "#14171a"
                                }}
                              >
                                .
                              </span>{" "}
                              Fund of Hedge Funds
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <Button
                                style={{
                                  backgroundColor: "white",
                                  // border: "1px solid #1560BD",
                                  width: 100,
                                  fontFamily: "Helvetica",
                                  height: 35,
                                  color: "#657786"
                                }}
                              >
                                <b
                                  style={{
                                    fontFamily: "Helvetica",
                                    fontSize: 12,
                                    textTransform: "capitalize"
                                  }}
                                >
                                  Ignore
                                </b>
                              </Button>
                              <Button
                                style={{
                                  backgroundColor: "white",
                                  border: "1px solid #1560BD",
                                  width: 100,
                                  fontFamily: "Helvetica",
                                  height: 35,
                                  color: "#1560BD"
                                }}
                              >
                                <b
                                  style={{
                                    fontFamily: "Helvetica",
                                    fontSize: 12,
                                    textTransform: "capitalize"
                                  }}
                                >
                                  Accept
                                </b>
                              </Button>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              lineHeight: "0px"
                            }}
                          >
                            <p
                              className=""
                              style={{
                                fontSize: "14px",
                                fontFamily: "Helvetica",
                                color: "#14171a"
                              }}
                            >
                              Head of Hedge Funds Research{" "}
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            })} */}
          </div>
          {showData && (
            <div className="col-md-6">
              <ExpansionPanel
                id="request"
                defaultExpanded
                className={classes.expansionPanelPaper}
              >
                <ExpansionPanelDetails
                  classes={{
                    root: classes.paddingDetails
                  }}
                >
                  <div className={classes.column}>
                    <span style={{ width: "100%", fontSize: 14 }}>
                      <div className="col-lg-3">
                        <Avatar
                          alt="Profile Picture"
                          style={{
                            width: "75px",
                            height: "75px",
                            marginTop: "5px",
                            cursor: "pointer",
                            marginLeft: 3
                          }}
                          src={profile_picture}
                          className={classes.avatar}
                        />
                        <br />
                        <br />
                        <div
                          className="d-flex"
                          style={{
                            justifyContent: "center",
                            marginTop: "-.2rem"
                          }}
                        >
                          <img
                            src={people}
                            style={{
                              display: "flex",
                              color: "#14171a"
                            }}
                            width="18px"
                            height="18px"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-9"
                        style={{
                          marginBottom: "-10px",
                          marginTop: 12,
                          marginLeft: 0
                        }}
                        u
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            lineHeight: "15px"
                          }}
                        >
                          <div style={{}}>
                            <b
                              style={{
                                width: "120px",
                                fontSize: 16,
                                fontFamily: "Helvetica Bold",
                                color: "#14171a",
                                fontWeight: "bold"
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between", width: "220%" }}>
                                <div>Ron Wilson</div>
                                <div class="editClass">Edit</div>
                              </div>
                              <br />
                              <span
                                style={{
                                  color: "#657786",
                                  fontWeight: 500,
                                  fontFamily: "Helvetica",
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: 12
                                }}
                              >
                                @RonWilson
                              </span>{" "}
                            </b>
                          </div>
                          {/* <span className={classes.perspective}>Prospective</span> */}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "Helvetica"
                          }}
                        >
                          <p
                            className=""
                            style={{
                              fontSize: "12px",
                              margin: "2px 0 10px",
                              color: "#14171a",
                              fontFamily: "Helvetica"
                            }}
                          >
                            <b
                              style={{
                                color: "#657786",
                                fontWeight: "bold",
                                fontFamily: "Helvetica"
                              }}
                            >
                              T2 Partners
                            </b>{" "}
                            <br />
                            Fund of Funds
                          </p>
                        </div>
                        <span
                          className="currentInvestor"
                          style={{
                            marginLeft: "-16px!important",
                            color: "#14171a",
                            fontWeight: "bold",
                            fontSize: 14,
                            fontFamily: "Helvetica"
                          }}
                        >
                          Current Investor
                        </span>
                      </div>
                    </span>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                style={{ marginTop: "20px", paddingLeft: 15 }}
                id="request"
                defaultExpanded
                className={classes.expansionPanelPaper}
              >
                <ExpansionPanelDetails
                  classes={{
                    root: classes.paddingDetails
                  }}
                >
                  <div className={classes.column}>
                    <span style={{ width: "100%", fontSize: 14 }}>
                      <div
                        className="col-lg-10"
                        style={{
                          marginBottom: "-10px",
                          marginTop: 12,
                          marginLeft: 0
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            lineHeight: "15px"
                          }}
                        >
                          <div style={{}}>
                            <b
                              style={{
                                width: "120px",
                                fontSize: 14,
                                fontFamily: "Helvetica",
                                color: "#657786",
                                fontWeight: "bold"
                              }}
                            >

                              <div style={{ display: "flex", justifyContent: "space-between", width: "148%" }}>
                                <div>ABOUT THIS CONTACT</div>
                                <div class="editClass">Edit</div>
                              </div>
                              <br />
                              <span
                                style={{
                                  color: "#657786",
                                  fontWeight: 500,
                                  fontFamily: "Helvetica",
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: 14
                                }}
                              >
                                <div className="d-flex">
                                  <br />
                                  <a href="https://www.linkedin.com" target="_blank">
                                    <img
                                      src={linkedin}
                                      style={{ cursor: "pointer" }}
                                      className="img mr-3"
                                      width="25px"
                                    />{" "}
                                  </a>
                                  <span
                                    style={{
                                      fontFamily: "Helvetica",
                                      fontSize: 14,
                                      fontWeight: "normal",
                                      lineHeight: "2.4rem",
                                      color: "#000"
                                    }}
                                  >
                                    Head of Hedge Fund Research
                                  </span>
                                </div>
                              </span>{" "}
                            </b>
                          </div>
                          {/* <span className={classes.perspective}>Prospective</span> */}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "Helvetica"
                          }}
                        >
                          <p
                            className=""
                            style={{
                              fontSize: "14px",
                              margin: "2px 0 10px",
                              color: "#14171a",
                              fontFamily: "Helvetica"
                            }}
                          >
                            <b
                              style={{
                                color: "#657786",
                                fontWeight: "bold",
                                fontFamily: "Helvetica"
                              }}
                            >
                              <div className="d-flex">
                                <br />
                                <img
                                  src={email}
                                  className="img mr-3"
                                  width="25px"
                                />{" "}
                                <span
                                  style={{
                                    fontFamily: "Helvetica",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    lineHeight: "2.4rem",
                                    color: "#000"
                                  }}
                                >
                                  ron.wilson@k2partners.com
                                </span>
                              </div>
                            </b>{" "}
                            <div className="d-flex">
                              <img
                                src={phone}
                                className="img mr-3"
                                width="25px"
                              />{" "}
                              <span
                                style={{
                                  fontFamily: "Helvetica",
                                  fontSize: 14,
                                  fontWeight: "normal",
                                  lineHeight: "2.4rem",
                                  color: "#000"
                                }}
                              >
                                (+1) 917 213 2079
                              </span>
                            </div>
                          </p>
                        </div>
                      </div>
                    </span>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                style={{ marginTop: "20px", paddingLeft: 15 }}
                id="request"
                defaultExpanded
                className={classes.expansionPanelPaper}
              >
                <ExpansionPanelDetails
                  classes={{
                    root: classes.paddingDetails
                  }}
                >
                  <div className={classes.column}>
                    <span style={{ width: "100%", fontSize: 14 }}>
                      <div
                        className="col-lg-10"
                        style={{
                          marginBottom: "-10px",
                          marginTop: 12,
                          marginLeft: 0
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            lineHeight: "15px"
                          }}
                        >
                          <div style={{}}>
                            <b
                              style={{
                                width: "120px",
                                fontSize: 14,
                                fontFamily: "Helvetica",
                                color: "#657786",
                                fontWeight: "bold"
                              }}
                            >
                              {/*   */}
                              <div style={{ display: "flex", justifyContent: "space-between", width: "142%" }}>
                                <div>FIRM</div>
                                <div class="editClass">Edit</div>
                              </div>
                              <br />
                              <span
                                style={{
                                  color: "#657786",
                                  fontWeight: 500,
                                  fontFamily: "Helvetica",
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: 14
                                }}
                              >
                                <div className="d-flex">
                                  <br />
                                  <img
                                    src={info}
                                    className="img mr-3"
                                    width="25px"
                                  />{" "}
                                  <span
                                    style={{
                                      fontFamily: "Helvetica",
                                      fontSize: 14,
                                      fontWeight: "normal",
                                      lineHeight: "2.4rem",
                                      color: "#000"
                                    }}
                                  >
                                    $900m invested in Hedge Funds
                                  </span>
                                </div>
                              </span>{" "}
                            </b>
                          </div>
                          {/* <span className={classes.perspective}>Prospective</span> */}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "Helvetica"
                          }}
                        >
                          <p
                            className=""
                            style={{
                              fontSize: "14px",
                              margin: "2px 0 10px",
                              color: "#14171a",
                              fontFamily: "Helvetica"
                            }}
                          >
                            <b
                              style={{
                                color: "#657786",
                                fontWeight: "bold",
                                fontFamily: "Helvetica"
                              }}
                            >
                              <div className="d-flex">
                                <br />
                                <img
                                  src={globe}
                                  className="img mr-3"
                                  width="25px"
                                />{" "}
                                <span
                                  style={{
                                    fontFamily: "Helvetica",
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    lineHeight: "2.4rem",
                                    color: "#000"
                                  }}
                                >
                                  https://k2partners.com
                                </span>
                              </div>
                            </b>{" "}
                            <div className="d-flex">
                              <img
                                src={location}
                                className="img mr-3"
                                width="25px"
                                height="23px"
                              />{" "}
                              <span
                                style={{
                                  fontFamily: "Helvetica",
                                  fontSize: 14,
                                  fontWeight: "normal",
                                  lineHeight: "2.4rem",
                                  color: "#000"
                                }}
                              >
                                230 3rd Avenue
                                <br />
                                Suite 109
                                <br />
                                New York, NY 10020
                              </span>
                            </div>
                          </p>
                        </div>
                      </div>
                    </span>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          )}
        </div>
      </div>
      {investors.length === 0 && !showLoader && (
        <Paper className={classes.pape} style={{ height: 80, width: "42.6%" }}>
          <center>
            <div
              style={{
                fontFamily: "Helvetica",
                marginTop: 6,
                color: "#000",
                fontSize: 16,
                fontWeight: 700
              }}
            >
              <i
                style={{
                  verticalAlign: "-webkit-baseline-middle",
                  lineHeight: "80px"
                }}
              >
                No Records Found.
              </i>
            </div>
          </center>
        </Paper>
      )}
      {/* <Dialog
        open={showLoader}
        onClose={handleClose2}
        style={{ backgroundColor: "transparent" }}
        overlayStyle={{ backgroundColor: "transparent" }}
        PaperProps={{
          classes: { scrollPaper: classes.dialogPaper },
          style: {
            backgroundColor: "transparent",
            boxShadow: "none"
          }
        }}
      >
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          src={loader}
          height="90px"
          width="90px"
        />
      </Dialog> */}
    </div>
  );
}

Request.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Request));
