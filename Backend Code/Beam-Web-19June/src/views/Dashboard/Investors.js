import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { Avatar, Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import profile_picture from "assets/img/profile_picture.png";
import "./abc.css";
import client from "../../connection.js";
import loader from "assets/img/loader.gif";
import getCompanyInvestorsQuery from "../../queries/getCompanyInvestors.js";
// import getCompaniesQuery from "queries/getCompanies";

const styles = theme => ({
  scroll: {
    marginLeft: "0px",
    overflowY: "scroll",
    height: 500,
    [theme.breakpoints.up(1900)]: {
      height: 900
    },
    [theme.breakpoints.down(601)]: {
      height: "auto"
      // overflowY:
    },
    [theme.breakpoints.down(421)]: {
      height: 445,
      overflowX: "hidden"
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
    width: "81%",
    marginBottom: "2%",
    [theme.breakpoints.up(1900)]: {
      width: "81%"
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
    marginRight: 12,
    fontWeight: 600
  },
  viewInsights: {
    color: "#79a4d9",
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: 600
  }
});

function Investors(props) {
  const [investors, setInvestors] = useState([]);
  const [fields, setFields] = useState({});
  const [showLoader, setLoader] = useState(true);
  const [post] = useState("");
  const [postError] = useState("");

  const getMyNetwork = () => {
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
    getMyNetwork();
  }, []);

  const handleChange = e => {
    fields[e.target.name] = e.target.value;
    setFields(fields);
  };

  const handleClose2 = () => {};

  const handleClick = () => {};

  // const handleVideoChange = (e) => {
  // }

  const { classes } = props;

  return (
    <div className={classes.scroll}>
      <div>
        <div>
          <div style={{ display: "none" }} className={classes.body1}>
            <div
              className="d-flex"
              style={{ margin: "0px 15px", paddingTop: "16px" }}
            >
              <input
                className="fileInput"
                type="file"
                accept="image/*"
                id="file_image"
                style={{ display: "none" }}
                // onChange={(e) => handleVideoChange(e)}
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
                  width: 92,
                  height: 33,
                  backgroundColor: "#1560bd",
                  fontSize: 16,
                  color: "white",
                  borderRadius: "30px"
                }}
              >
                Invite
              </Button>
            </div>
          </div>
        </div>

        {investors.map(function(investor) {
          return (
            <ExpansionPanel
              key={1}
              defaultExpanded
              className={classes.expansionPanelPaper}
            >
              <ExpansionPanelDetails className={classes.details}>
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
                      </div>
                      <div
                        className="col-lg-11"
                        style={{ marginBottom: "-16px" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <div style={{ lineHeight: "40px" }}>
                            <b style={{ width: "120px", fontSize: 14 }}>
                              {investor.user.first_name}{" "}
                              {investor.user.last_name} @
                              {investor.user.username}{" "}
                            </b>
                          </div>
                          <span className={classes.perspective}>
                            Prospective
                          </span>
                        </div>
                        <p
                          className=""
                          style={{
                            fontSize: "12px",
                            margin: "-7px 0 10px",
                            color: "gray"
                          }}
                        >
                          <b>{investor.company.name}</b> Fund of Hedge Funds
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <p className="" style={{ fontSize: "13px" }}>
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
      </div>
      <br />
      <br />
      {investors.length === 0 && (
        <Paper className={classes.pape} style={{ height: 80, width: "81%" }}>
          <center>
            <div
              style={{
                fontFamily: "Helvetica",
                marginTop: 10,
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
      <Dialog
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
      </Dialog>
    </div>
  );
}

Investors.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Investors));
