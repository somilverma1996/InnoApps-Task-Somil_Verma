/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import toRenderProps from "recompose/toRenderProps";
import withState from "recompose/withState";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import CustomizedDialogDemo from './userDetail';
// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";

const WithState = toRenderProps(withState("anchorEl", "updateAnchorEl", null));

const styles = theme => ({
  drop: {
    marginLeft: 20,
    marginTop: 8,
    [theme.breakpoints.up(481)]: {
      marginLeft: 10
    },
    [theme.breakpoints.up(415)]: {
      marginLeft: 20
    },
    [theme.breakpoints.down(413)]: {
      marginLeft: 9
    },
    [theme.breakpoints.down(321)]: {
      marginLeft: 20
    }
  },
  adduser: {
    display: "none",
    [theme.breakpoints.down(801)]: {
      display: "block"
    }
  }
});
class DropdownDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1
    };
  }
  componentDidMount() {}

  handleDeleteOrganization = () => {
    // const { dispatch } = this.props;
  };
  render() {
    const { classes } = this.props;
    const index = this.props.index;
    return (
      <WithState>
        {({ anchorEl, updateAnchorEl }) => {
          const open = Boolean(anchorEl);
          const handleClose = () => {
            updateAnchorEl(null);
          };

          return (
            <React.Fragment>
              <span
                aria-owns={open ? "render-props-menu" : undefined}
                aria-haspopup="true"
                onClick={event => {
                  updateAnchorEl(event.currentTarget);
                }}
                aria-label="edit"
                justIcon
                style={{
                  textTransform: "capitalize",
                  padding: 0,
                  cursor: "pointer"
                }}
                className={classes.drop}
              >
                <span
                  onClick={this.handleOpen}
                  style={{ marginLeft: 0, color: "#657786", fontSize: 16 }}
                >
                  <ExpandMoreIcon />
                </span>
              </span>
              <Menu
                id="render-props-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <div className={classes.adduser}></div>
                <Route
                  render={({ history }) => (
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        height: 5,
                        color: "#65748e",
                        fontFamily: "Avenir"
                      }}
                      onClick={() => {}}
                    >
                      <small style={{ display: "flex" }}>
                        <i
                          className="fa fa-pencil-square-o"
                          style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            marginRight: "12px",
                            marginTop: 3
                          }}
                          aria-hidden="true"
                        ></i>
                        <span style={{ fontSize: "14px", fontWeight: 600 }}>
                          Add to post...
                        </span>
                      </small>
                    </MenuItem>
                  )}
                />
                <MenuItem
                  onClick={handleClose}
                  style={{ height: 5, color: "#65748e", fontFamily: "Avenir" }}
                >
                  <small
                    onClick={this.handleDeleteOrganization}
                    style={{ display: "flex" }}
                  >
                    <i
                      className="fa fa-trash"
                      style={{
                        fontSize: "16px",
                        cursor: "pointer",
                        marginRight: "15px",
                        marginTop: 3
                      }}
                      aria-hidden="true"
                    ></i>
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      Update
                    </span>
                  </small>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  style={{ height: 5, color: "#65748e", fontFamily: "Avenir" }}
                >
                  <small
                    onClick={this.handleDeleteOrganization}
                    style={{ display: "flex" }}
                  >
                    <i
                      className="fa fa-trash"
                      style={{
                        fontSize: "16px",
                        cursor: "pointer",
                        marginRight: "15px",
                        marginTop: 3
                      }}
                      aria-hidden="true"
                    ></i>
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      Delete
                    </span>
                  </small>
                </MenuItem>
              </Menu>
            </React.Fragment>
          );
        }}
      </WithState>
    );
  }
}

DropdownDepartment.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(DropdownDepartment);

const mapStateToProps = state => {
  return state;
};
export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    {
      pure: false
    }
  )(withStyles(styles)(DropdownDepartment))
);
