import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Chip from "@material-ui/core/Chip";
import { withRouter } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import InvestorTable2 from "./InvestorTable2.js";
import InvestorTable1 from "./InvestorTable1.js";
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
      height: "370",
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

function SingleInvestorInsights(props) {
  const { classes } = props;

  return (
    <div className="abc" style={{ marginLeft: "-34px", width: "1100px" }}>
      <div className={classes.scroll}>
        <div style={{ marginBottom: "12px" }}>
          <p style={{ fontSize: "20px" }}>Investor Insights</p>
          <Chip
            color="default"
            label="Matthias Sianz(Montcalm)"
            className={classes.postBtn}
            style={{
              marginRight: "30px",
              width: 160,
              backgroundColor: "white",
              fontSize: 12
            }}
          >
            Update
          </Chip>
          <Chip
            color="default"
            label="This week"
            className={classes.postBtn}
            style={{ width: 80, backgroundColor: "white", fontSize: 12 }}
          >
            Update
          </Chip>
        </div>
        <div className="row" style={{ marginBottom: "18px" }}>
          <div className="col-lg-3" style={{ marginRight: "-50px" }}>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
            >
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} style={{ marginLeft: "18px" }}>
                  <br />
                  <br />
                  <span style={{ width: "100%", fontSize: 24 }}>
                    <b>3</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Days Active</p>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div className="col-lg-3" style={{ marginRight: "-50px" }}>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
            >
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} style={{ marginLeft: "18px" }}>
                  <br />
                  <br />
                  <span style={{ width: "100%", fontSize: 24 }}>
                    <b>7</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Profile Visits</p>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div className="col-lg-3" style={{ marginRight: "-50px" }}>
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
            >
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} style={{ marginLeft: "18px" }}>
                  <br />
                  <br />
                  <span style={{ width: "100%", fontSize: 24 }}>
                    <b>0:35</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>
                    Average time per day
                  </p>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div className="col-lg-3">
            <ExpansionPanel
              defaultExpanded
              className={classes.expansionPanelPaper}
            >
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} style={{ marginLeft: "18px" }}>
                  <br />
                  <br />
                  <span style={{ width: "100%", fontSize: 24 }}>
                    <b>17</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>
                    Total Engagements
                  </p>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>

        <ExpansionPanel defaultExpanded className={classes.expansionPanelPaper}>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <br />
              <span style={{ width: "100%", fontSize: 16 }}>
                <b>Update Impressions</b>
              </span>
              <br />
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>19</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Impressions</p>
                </div>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>9</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Read More</p>
                </div>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>3</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Saved</p>
                </div>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>8</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Shared</p>
                </div>
              </div>

              <InvestorTable1 />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel defaultExpanded className={classes.expansionPanelPaper}>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <br />
              <span style={{ width: "100%", fontSize: 16 }}>
                <b>Documents</b>
              </span>
              <br />
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>19</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Impressions</p>
                </div>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>9</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Read More</p>
                </div>
                <div className="col-lg-3">
                  {" "}
                  <span style={{ width: "100%", fontSize: 22 }}>
                    <b>3</b>
                  </span>
                  <p style={{ color: "gray", fontSize: 12 }}>Saved</p>
                </div>
                {/* <div class="col-lg-3"> <span style={{ width: '100%', fontSize: 16 }}><b>8</b></span>
                 <p>Shared</p></div> */}
              </div>

              <InvestorTable2 />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

SingleInvestorInsights.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SingleInvestorInsights));
