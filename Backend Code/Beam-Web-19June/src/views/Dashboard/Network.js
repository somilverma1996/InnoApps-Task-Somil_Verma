import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import { withRouter } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
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
    paddingLeft: "3.7%"
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
    height: "auto!important",
    paddingBottom: "20px!important",
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

function Network(props) {
  const { classes } = props;

  return (
    <div style={{ marginRight: "305px", marginLeft: "-34px" }}>
      <div>
        <ExpansionPanel defaultExpanded className={classes.expansionPanelPaper}>
          <ExpansionPanelDetails
            className={classes.details}
            style={{ marginBottom: "-12px" }}
          >
            <div className={classes.column}>
              <span style={{ width: "100%", fontSize: 14 }}>
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
                  </div>{" "}
                  <div className="col-lg-6">
                    <div style={{ lineHeight: "40px", margin: "-7px 0 10px" }}>
                      <b style={{ width: "120px", fontSize: 14 }}>Ron Wilson</b>
                      <b
                        style={{ width: "120px", fontSize: 12, color: "gray" }}
                      >
                        @Ron Wilson
                      </b>
                    </div>
                    <p
                      className=""
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        margin: "-13px 0 10px"
                      }}
                    >
                      <b>MONTCALM PARTNERS</b> Family Office
                    </p>
                    <p
                      className=""
                      style={{ fontSize: "12px", margin: "-7px 0 10px" }}
                    >
                      Head of Hedge Funds Research{" "}
                    </p>
                    {/* <p class="" style={{color:"gray", fontSize:"13px"}}><i class="fa fa-link"></i> Archel Davis and 2 other investors</p> </div> */}
                  </div>
                  <div className="col-lg-1">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3">
                    <p className="" style={{ fontSize: "14px", color: "gray" }}>
                      Prospective
                    </p>
                    <br />
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      View Insights
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel defaultExpanded className={classes.expansionPanelPaper}>
          <ExpansionPanelDetails
            className={classes.details}
            style={{ marginTop: "-11px", marginBottom: "-12px" }}
          >
            <div className={classes.column}>
              <span style={{ width: "100%", fontSize: 14 }}>
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
                  </div>{" "}
                  <div className="col-lg-6">
                    <div style={{ lineHeight: "40px", margin: "-7px 0 10px" }}>
                      <b style={{ width: "120px", fontSize: 14 }}>Ron Wilson</b>
                      <b
                        style={{ width: "120px", fontSize: 12, color: "gray" }}
                      >
                        @Ron Wilson
                      </b>
                    </div>
                    <p
                      className=""
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        margin: "-13px 0 10px"
                      }}
                    >
                      <b>MONTCALM PARTNERS</b> Family Office
                    </p>
                    <p
                      className=""
                      style={{ fontSize: "13px", margin: "-7px 0 10px" }}
                    >
                      Director{" "}
                    </p>
                  </div>
                  <div className="col-lg-1">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3">
                    <p className="" style={{ fontSize: "14px", color: "gray" }}>
                      Prospective
                    </p>
                    <br />
                    <p className="" style={{ fontSize: "12px", color: "blue" }}>
                      View Insights
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

Network.propTypes = {
  classes: PropTypes.object.isRequired
};
// const mapStateToProps = state => {
//   return state;
// }
// const mapDispatchToProps = dispatch => ({
//   // addTodo: () => dispatch(addTodo())
// })
// export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Dashboard));

export default withRouter(withStyles(styles)(Network));
