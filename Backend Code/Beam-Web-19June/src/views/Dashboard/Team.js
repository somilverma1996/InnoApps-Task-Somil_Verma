import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import { withRouter } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import profile_picture from "assets/img/profile_picture.png";
import "./abc.css";

const styles = theme => ({
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
    paddingLeft: "8.7%"
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
    width: "81%",
    marginTop: "1%!important",
    [theme.breakpoints.down(801)]: {
      width: "98% "
    },
    [theme.breakpoints.down(801)]: {
      width: "94% "
    }
  },
  scroll: {
    [theme.breakpoints.down(1200)]: {
      height: "370px",
      overflowY: "scroll"
    },
    [theme.breakpoints.up(1201)]: {
      height: "330px",
      overflowY: "scroll"
    },
    [theme.breakpoints.up(1250)]: {
      height: "728px",
      overflowY: "scroll"
    },
    [theme.breakpoints.up(1401)]: {
      height: "850px",
      overflowY: "scroll"
    },
    [theme.breakpoints.up(1801)]: {
      height: "775px",
      overflowY: "scroll"
    }
  },
  body1: {
    display: "flex",
    backgroundColor: "#E8F1FC",
    width: "81%",
    height: "20em",
    padding: "2%",
    marginBottom: "2%",
    [theme.breakpoints.down(801)]: {
      width: "98%"
    },
    [theme.breakpoints.down(769)]: {
      width: "94%"
    }
  },
  padding: {
    marginLeft: "-120px",
    [theme.breakpoints.up(1900)]: {
      marginLeft: "-70px"
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
    marginLeft: "4em",
    marginTop: "-6em",
    justifyContent: "space-between",
    [theme.breakpoints.up(1900)]: {
      marginTop: "-8em"
    }
  }
});

function Team(props) {
  const { classes } = props;

  return (
    <div style={{ marginLeft: "-34px", width: "1100px" }}>
      <div className={classes.body2}>
        <div style={{ marginLeft: "3.2em", fontSize: "18px" }}>
          <i className="fa fa-picture-o" aria-hidden="true"></i>
        </div>
      </div>
      <br />
      <div>
        <div className="row" style={{ marginRight: "-160px" }}>
          <div className="col-lg-8" style={{ marginRight: "-40px" }}>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ marginBottom: "-2px" }}
            >
              <ExpansionPanelDetails
                className={classes.details}
                style={{ marginLeft: "-40px" }}
              >
                <div className={classes.column}>
                  <div className="row">
                    <div className="col-lg-1">
                      <Avatar
                        alt="Profile Picture"
                        style={{
                          marginTop: "5px",
                          cursor: "pointer",
                          marginLeft: 3
                        }}
                        src={profile_picture}
                        className={classes.avatar}
                      />
                    </div>
                    <div className="col-lg-11">
                      <div
                        style={{ lineHeight: "40px", marginBottom: "-10px" }}
                      >
                        <b style={{ width: "120px", fontSize: 14 }}>
                          John Richmond
                        </b>{" "}
                        <b
                          style={{
                            width: "120px",
                            fontSize: 12,
                            color: "gray"
                          }}
                        >
                          @John Richmond
                        </b>{" "}
                        <b style={{ width: 50, fontSize: 12, color: "gray" }}>
                          . Portfolio Manager
                        </b>
                      </div>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        John has nineteen years of long/short investing
                        experience in public markets. He was a partner at Wagram
                        Capital from 2007 to 2017. During his time there, he was
                        responsible for analysis, selection and risk management
                        of both long and short investments, in the energy and
                        healthcare sectors. From 1999 to 2002, he was an
                        investment banking analyst at Blue Bank. John hold a BBA
                        in finance from the University of Harvard and was a
                        freedom Support Act Scholarship Recipient.
                      </span>
                    </div>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ marginBottom: "-2px" }}
            >
              <ExpansionPanelDetails
                className={classes.details}
                style={{ marginLeft: "-40px" }}
              >
                <div className={classes.column}>
                  <div className="row">
                    <div className="col-lg-1">
                      <Avatar
                        alt="Profile Picture"
                        style={{
                          marginTop: "5px",
                          cursor: "pointer",
                          marginLeft: 3
                        }}
                        src={profile_picture}
                        className={classes.avatar}
                      />
                    </div>
                    <div className="col-lg-11">
                      <div
                        style={{ lineHeight: "40px", marginBottom: "-10px" }}
                      >
                        <b style={{ width: "120px", fontSize: 14 }}>
                          John Richmond
                        </b>{" "}
                        <b
                          style={{
                            width: "120px",
                            fontSize: 12,
                            color: "gray"
                          }}
                        >
                          @John Richmond
                        </b>{" "}
                        <b style={{ width: 50, fontSize: 12, color: "gray" }}>
                          . Portfolio Manager
                        </b>
                      </div>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        John has nineteen years of long/short investing
                        experience in public markets. He was a partner at Wagram
                        Capital from 2007 to 2017. During his time there, he was
                        responsible for analysis, selection and risk management
                        of both long and short investments, in the energy and
                        healthcare sectors. From 1999 to 2002, he was an
                        investment banking analyst at Blue Bank. John hold a BBA
                        in finance from the University of Harvard and was a
                        freedom Support Act Scholarship Recipient.
                      </span>
                    </div>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ marginBottom: "-2px" }}
            >
              <ExpansionPanelDetails
                className={classes.details}
                style={{ marginLeft: "-40px" }}
              >
                <div className={classes.column}>
                  <div className="row">
                    <div className="col-lg-1">
                      <Avatar
                        alt="Profile Picture"
                        style={{
                          marginTop: "5px",
                          cursor: "pointer",
                          marginLeft: 3
                        }}
                        src={profile_picture}
                        className={classes.avatar}
                      />
                    </div>
                    <div className="col-lg-11">
                      <div
                        style={{ lineHeight: "40px", marginBottom: "-10px" }}
                      >
                        <b style={{ width: "120px", fontSize: 14 }}>
                          John Richmond
                        </b>{" "}
                        <b
                          style={{
                            width: "120px",
                            fontSize: 12,
                            color: "gray"
                          }}
                        >
                          @John Richmond
                        </b>{" "}
                        <b style={{ width: 50, fontSize: 12, color: "gray" }}>
                          . Portfolio Manager
                        </b>
                      </div>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        John has nineteen years of long/short investing
                        experience in public markets. He was a partner at Wagram
                        Capital from 2007 to 2017. During his time there, he was
                        responsible for analysis, selection and risk management
                        of both long and short investments, in the energy and
                        healthcare sectors. From 1999 to 2002, he was an
                        investment banking analyst at Blue Bank. John hold a BBA
                        in finance from the University of Harvard and was a
                        freedom Support Act Scholarship Recipient.
                      </span>
                    </div>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ marginBottom: "-2px" }}
            >
              <ExpansionPanelDetails
                className={classes.details}
                style={{ marginLeft: "-40px" }}
              >
                <div className={classes.column}>
                  <div className="row">
                    <div className="col-lg-1">
                      <Avatar
                        alt="Profile Picture"
                        style={{
                          marginTop: "5px",
                          cursor: "pointer",
                          marginLeft: 3
                        }}
                        src={profile_picture}
                        className={classes.avatar}
                      />
                    </div>
                    <div className="col-lg-11">
                      <div
                        style={{ lineHeight: "40px", marginBottom: "-10px" }}
                      >
                        <b style={{ width: "120px", fontSize: 14 }}>
                          John Richmond
                        </b>{" "}
                        <b
                          style={{
                            width: "120px",
                            fontSize: 12,
                            color: "gray"
                          }}
                        >
                          @John Richmond
                        </b>{" "}
                        <b style={{ width: 50, fontSize: 12, color: "gray" }}>
                          . Portfolio Manager
                        </b>
                      </div>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        John has nineteen years of long/short investing
                        experience in public markets. He was a partner at Wagram
                        Capital from 2007 to 2017. During his time there, he was
                        responsible for analysis, selection and risk management
                        of both long and short investments, in the energy and
                        healthcare sectors. From 1999 to 2002, he was an
                        investment banking analyst at Blue Bank. John hold a BBA
                        in finance from the University of Harvard and was a
                        freedom Support Act Scholarship Recipient.
                      </span>
                    </div>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ marginBottom: "-2px" }}
            >
              <ExpansionPanelDetails
                className={classes.details}
                style={{ marginLeft: "-40px" }}
              >
                <div className={classes.column}>
                  <div className="row">
                    <div className="col-lg-1">
                      <Avatar
                        alt="Profile Picture"
                        style={{
                          marginTop: "5px",
                          cursor: "pointer",
                          marginLeft: 3
                        }}
                        src={profile_picture}
                        className={classes.avatar}
                      />
                    </div>
                    <div className="col-lg-11">
                      <div
                        style={{ lineHeight: "40px", marginBottom: "-10px" }}
                      >
                        <b style={{ width: "120px", fontSize: 14 }}>
                          John Richmond
                        </b>{" "}
                        <b
                          style={{
                            width: "120px",
                            fontSize: 12,
                            color: "gray"
                          }}
                        >
                          @John Richmond
                        </b>{" "}
                        <b style={{ width: 50, fontSize: 12, color: "gray" }}>
                          . Portfolio Manager
                        </b>
                      </div>
                      <span style={{ width: "100%", fontSize: 14 }}>
                        John has nineteen years of long/short investing
                        experience in public markets. He was a partner at Wagram
                        Capital from 2007 to 2017. During his time there, he was
                        responsible for analysis, selection and risk management
                        of both long and short investments, in the energy and
                        healthcare sectors. From 1999 to 2002, he was an
                        investment banking analyst at Blue Bank. John hold a BBA
                        in finance from the University of Harvard and was a
                        freedom Support Act Scholarship Recipient.
                      </span>
                    </div>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          {/* //"col-lg-4"  */}
          <div className={classes.padding}>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ marginBottom: "-1px", width: "280px" }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                style={{ minHeight: "50px" }}
              >
                <div className={classes.column}>
                  <Typography
                    className={classes.heading}
                    style={{ display: "flex" }}
                  >
                    <div style={{ lineHeight: "40px", marginBottom: "-3px" }}>
                      <b style={{ width: "120px", fontSize: 14 }}>
                        {"This week's Activity"}
                      </b>
                      <span
                        style={{
                          color: "blue",
                          fontSize: 13,
                          textDecoration: "underline"
                        }}
                      >
                        Refresh
                      </span>
                    </div>
                  </Typography>
                </div>
              </ExpansionPanelSummary>
            </ExpansionPanel>

            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
              style={{ width: "280px" }}
            >
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column}>
                  <div style={{ lineHeight: "40px", display: "flex" }}>
                    <b style={{ width: "120px", fontSize: 13, color: "gray" }}>
                      INVESTORS{" "}
                    </b>{" "}
                    <span
                      style={{
                        color: "blue",
                        fontSize: 12,
                        textDecoration: "underline"
                      }}
                    >
                      {" "}
                      View Insights
                    </span>{" "}
                  </div>
                  <div
                    style={{
                      lineHeight: "40px",
                      display: "flex",
                      marginBottom: "-10px"
                    }}
                  >
                    <b style={{ width: "120px", fontSize: 16 }}>19 </b>{" "}
                    <span style={{ color: "green", fontSize: 14 }}>
                      <i className="fa fa-arrow-up"></i>10%
                    </span>{" "}
                  </div>
                  <p style={{ color: "gray", fontSize: "12px" }}>
                    Active Investors
                  </p>
                  <div
                    style={{
                      lineHeight: "40px",
                      display: "flex",
                      marginBottom: "-10px"
                    }}
                  >
                    <b style={{ width: "120px", fontSize: 16 }}>4 </b>{" "}
                    <span style={{ color: "red", fontSize: 14 }}>
                      <i className="fa fa-arrow-down"></i>7%
                    </span>{" "}
                  </div>
                  <p style={{ color: "gray", fontSize: "12px" }}>
                    New Following Investors
                  </p>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>

        <a
          href="#"
          style={{
            textDecoration: "underline",
            color: "blue",
            fontSize: "15px"
          }}
        >
          Add a team member
        </a>
      </div>
    </div>
  );
}

Team.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Team));
