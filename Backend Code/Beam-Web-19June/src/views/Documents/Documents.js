/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Dashboard/style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Paper } from "@material-ui/core";
import "./style.css";
import assignment from "assets/img/assignment.png";
import {
  Popper,
  Grow,
  ClickAwayListener,
  MenuItem,
  MenuList
} from "@material-ui/core";

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
    width: "59%",
    cursor: "default!important",
    marginTop: "0%!important",
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
      height: "423px",
      overflowY: "scroll"
    },
    [theme.breakpoints.up(1400)]: {
      height: 790
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
  },
  uploadSpan: {
    // marginRight: '11em',
    // [theme.breakpoints.down(1025)]: {
    //   marginRight: '8em'
    // },
    // [theme.breakpoints.down(800)]: {
    //   marginRight: '3em'
    // },
    // [theme.breakpoints.down(800)]: {
    //   marginRight: '2em'
    // }
  },
  label_file: {
    display: "flex",
    justifyContent: "flex-end",
    width: "59%",
    [theme.breakpoints.up(1900)]: {
      width: "59%!important"
    },
    [theme.breakpoints.down(801)]: {
      width: "94%"
    },
    [theme.breakpoints.down(768)]: {
      width: "94%"
    }
  },
  menuItem: {
    color: "#657786",
    fontFamily: "Helvetica",
    fontSize: "14px"
  }
});

function Documents(props) {
  const [file, setFile] = useState({});
  let [open, setOpen] = useState(false);
  let [openPoperFromDialog, setOpenPoper1] = useState(false);
  let [docData, setDocData] = useState([
    {
      head: "Monthly Letter - Jan 2019",
      size: "104.1 KB",
      updatedOn: "Updated on Oct 1, 2019"
    },
    {
      head: "Monthly Letter - Feb 2019",
      size: "104.1 KB",
      updatedOn: "Updated on Oct 1, 2019"
    },
    {
      head: "Investor Presentation - Sep 2019",
      size: "104.1 KB",
      updatedOn: "Updated on Oct 1, 2019"
    },
    {
      head: "Monthly Letter - Mar 2019",
      size: "104.1 KB",
      updatedOn: "Updated on Oct 1, 2019"
    },
    {
      head: "Monthly Letter - Sep 2019",
      size: "104.1 KB",
      updatedOn: "Updated on Oct 1, 2019"
    },
    {
      head: "PPM Offshore-  2019",
      size: "104.1 KB",
      updatedOn: "Updated on Oct 1, 2019"
    }
  ]);
  const handleFileChange = e => {
    setFile(e.target.files[0].name);
  };
  const anchorRef1 = React.useRef(null);
  const handleToggle1 = () => {
    setOpenPoper1(prevOpen => !prevOpen);
  };

  const handleClosePoper1 = event => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }

    setOpenPoper1(false);
  };

  function handleListKeyDown1(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const { classes } = props;

  return (
    <div className={classes.scroll}>
      <div>
        <div id="document">
          <div>
            <span
              style={{
                color: "#657786",
                fontSize: "13px",
                marginBottom: "1px"
              }}
            >
              <i style={{ lineHeight: "1rem" }}>
                <p
                  style={{
                    color: "#657786",
                    fontWeight: "normal",
                    padding: "12px 10px 0px"
                  }}
                >
                  Confidential Information
                </p>
                <p
                  style={{
                    marginBottom: "-40px",
                    fontWeight: "normal",
                    color: "#657786",
                    paddingLeft: 10
                  }}
                >
                  Documents may not be distributed or published.
                </p>
              </i>
            </span>
            <div className={classes.label_file}>
              <label htmlFor="files" onChange={e => handleFileChange(e)}>
                <span
                  className={classes.uploadSpan}
                  style={{
                    color: "#1560BD",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "14px",
                    cursor: "pointer",
                    marginTop: "4em",
                    fontWeight: "normal"
                  }}
                >
                  Upload...
                </span>
              </label>
            </div>
            {file.length > 0 && <span> {file}</span>}
            <input
              className="fileInput"
              type="file"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document "
              id="files"
              style={{ visibility: "hidden" }}
              onChange={e => handleFileChange(e)}
            />
          </div>
          <Popper
            id="check1"
            open={openPoperFromDialog}
            anchorEl={anchorRef1.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === "bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClosePoper1}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown1}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClosePoper1}
                      >
                        Attach to post...
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClosePoper1}
                      >
                        Update
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClosePoper1}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <div id="documents" style={{ cursor: "default" }}>
            {docData.map((data, index) => (
              <Paper defaultExpanded className={classes.expansionPanelPaper + " pd-3 mb-2"}>
                <ExpansionPanelSummary
                  style={{ cursor: "default" }}
                  expandIcon={
                    <ExpandMoreIcon
                      className="expandIcon"
                      ref={anchorRef1}
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle1}
                    />
                  }
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <div className={classes.column}>
                    <Typography
                      className={classes.heading}
                      style={{ display: "flex" }}
                    >
                      <div style={{ lineHeight: "40px" }}>
                        <div key={index}>
                          <p
                            style={{
                              marginLeft: 2,
                              fontSize: 14,
                              fontWeight: "normal",
                              color: "#1560BD",
                              marginBottom: "-10px",
                              marginTop: "0px",
                              fontFamily: "Helvetica"
                            }}
                          >
                            {data.head}
                          </p>
                          <p
                            style={{
                              fontSize: 13,
                              color: "#657786",
                              marginBottom: "1px",
                              lineHeight: "2rem",
                              fontFamily: "Helvetica"
                            }}
                          >
                            <img src={assignment} /> Newsletter{" "}
                            {/* <span style={{ verticalAlign: "super" }}>.</span> */}
                            <span>
                              <i
                                className="fa fa-circle"
                                style={{
                                  fontSize: 3.5,
                                  verticalAlign: "middle",
                                  margin: "0px 6px"
                                }}
                              ></i>
                            </span>
                            {data.size}
                            {/* <span style={{ verticalAlign: "super" }}>.</span> */}
                            <span>
                              <i
                                className="fa fa-circle"
                                style={{
                                  fontSize: 3.5,
                                  verticalAlign: "middle",
                                  margin: "0px 6px"
                                }}
                              ></i>
                            </span>
                            {data.updatedOn}
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </div>
                </ExpansionPanelSummary>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Documents.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Documents));
