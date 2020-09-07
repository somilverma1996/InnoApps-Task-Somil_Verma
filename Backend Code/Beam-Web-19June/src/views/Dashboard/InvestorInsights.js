/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import ReactTable from "react-table";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

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
    paddingLeft: "3%",
    [theme.breakpoints.down(421)]: {
      paddingLeft: "0.5%"
    }
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
    width: "50%",
    // marginTop: '1%!important',
    [theme.breakpoints.down(801)]: {
      width: "98% "
    },
    [theme.breakpoints.down(801)]: {
      width: "94% "
    },
    [theme.breakpoints.down(421)]: {
      width: "98% "
    }
  },
  scroll: {
    marginLeft: "0px",
    overflowY: "scroll",
    height: 500,
    [theme.breakpoints.up(1400)]: {
      height: 550
    },
    [theme.breakpoints.up(1900)]: {
      height: 850
    },
    [theme.breakpoints.down(601)]: {
      height: "auto"
      // overflowY:
    },
    [theme.breakpoints.down(421)]: {
      height: 350,
      overflowX: "hidden"
      // overflowY:
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

function InvestorInsightsPage(props) {
  let arr = [
    {
      name: (
        <span style={{ fontFamily: "Helvetica" }}>
          <p
            className=""
            style={{ fontSize: "14px", color: "#1560BD", fontWeight: "normal", margin: "0 0 0px!important" }}
          >
            Matthias Sainz
          </p>
          <p
            className=""
            style={{ fontSize: "13px", color: "#657786", fontWeight: "normal", margin: "0 0 0px!important" }}
          >
            Montcalm Partners
          </p>
        </span>
      ),
      views: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          1
        </span>
      ),
      downloads: (
        <span
          style={{
            marginLeft: 30,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          2
        </span>
      ),
      last_viewed: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          4: 30 PM
        </span>
      )
    },
    {
      name: (
        <span style={{ fontFamily: "Helvetica" }}>
          <p
            className=""
            style={{ fontSize: "14px", color: "#1560BD", fontWeight: "normal", margin: "0 0 0px!important" }}
          >
            Matthias Sainz
          </p>
          <p
            className=""
            style={{ fontSize: "13px", color: "#657786", fontWeight: "normal", margin: "0 0 0px!important" }}
          >
            Montcalm Partners
          </p>
        </span>
      ),
      views: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          1
        </span>
      ),
      downloads: (
        <span
          style={{
            marginLeft: 30,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          2
        </span>
      ),
      last_viewed: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          4: 30 PM
        </span>
      )
    },
    {
      name: (
        <span style={{ fontFamily: "Helvetica" }}>
          <p
            className=""
            style={{ fontSize: "14px", color: "#1560BD", fontWeight: "normal" }}
          >
            Matthias Sainz
          </p>
          <p
            className=""
            style={{ fontSize: "13px", color: "#657786", fontWeight: "normal" }}
          >
            Montcalm Partners
          </p>
        </span>
      ),
      views: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          1
        </span>
      ),
      downloads: (
        <span
          style={{
            marginLeft: 30,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          2
        </span>
      ),
      last_viewed: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          4: 30 PM
        </span>
      )
    },
    {
      name: (
        <span style={{ fontFamily: "Helvetica" }}>
          <p
            className=""
            style={{ fontSize: "14px", color: "#1560BD", fontWeight: "normal" }}
          >
            Matthias Sainz
          </p>
          <p
            className=""
            style={{ fontSize: "13px", color: "#657786", fontWeight: "normal" }}
          >
            Montcalm Partners
          </p>
        </span>
      ),
      views: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          1
        </span>
      ),
      downloads: (
        <span
          style={{
            marginLeft: 30,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          2
        </span>
      ),
      last_viewed: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          4: 30 PM
        </span>
      )
    },
    {
      name: (
        <span style={{ fontFamily: "Helvetica" }}>
          <p
            className=""
            style={{ fontSize: "14px", color: "#1560BD", fontWeight: "normal" }}
          >
            Matthias Sainz
          </p>
          <p
            className=""
            style={{ fontSize: "13px", color: "#657786", fontWeight: "normal" }}
          >
            Montcalm Partners
          </p>
        </span>
      ),
      views: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          1
        </span>
      ),
      downloads: (
        <span
          style={{
            marginLeft: 30,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          2
        </span>
      ),
      last_viewed: (
        <span
          style={{
            marginLeft: 20,
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontWeight: "normal",
            color: "#14171a"
          }}
        >
          4: 30 PM
        </span>
      )
    }
  ];

  const [data] = useState(arr);

  const { classes } = props;

  return (
    <div className="abc" style={{}}>
      <h2
        style={{
          fontFamily: "Helvetica",
          color: "#14171a",
          fontSize: 24,
          fontWeight: "normal"
        }}
      >
        Document Insights
      </h2>
      <br />
      <br />
      <br />
      <div className={classes.scroll}>
        <ExpansionPanel defaultExpanded className={classes.expansionPanelPaper}>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <br />
              <span
                style={{
                  width: "100%",
                  fontSize: 16,
                  fontFamily: "Helvetica",
                  marginRight: "3px",
                  fontWeight: "bold",
                  color: "#14171a"
                }}
              >
                <b>Investors views</b>
              </span>
              <br />
              <br />
              <br />
              <ReactTable
                data={data}
                filterable={false}
                columns={[
                  {
                    Header: (
                      <span
                        style={{
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#14171a"
                        }}
                      >
                        Name
                      </span>
                    ),
                    accessor: "name",
                    className: "video_column",
                    sortable: false,
                    filterable: false,
                    style: { fontWeight: 700 }
                  },
                  {
                    Header: (
                      <span
                        style={{
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#14171a"
                        }}
                      >
                        Views
                      </span>
                    ),
                    accessor: "views"
                  },
                  {
                    Header: (
                      <span
                        style={{
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#14171a"
                        }}
                      >
                        Downloads
                      </span>
                    ),
                    accessor: "downloads",
                    sortable: false
                  },
                  {
                    Header: (
                      <span
                        style={{
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#14171a",
                          float: "left"
                        }}
                      >
                        Last Viewed
                      </span>
                    ),
                    className: "lastviewed",
                    accessor: "last_viewed"
                  }
                ]}
                defaultPageSize={data.length}
                showPaginationTop={false}
                showPaginationBottom={false}
                noDataText="No data found."
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

InvestorInsightsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(InvestorInsightsPage));
