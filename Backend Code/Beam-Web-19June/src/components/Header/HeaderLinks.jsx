import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import headerLinksStyle from "assets/jss/material-dashboard-pro-react/components/headerLinksStyle";
// import { userActions } from '_actions/user.actions.js';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import people_blue from "assets/img/Network.png";
import home_blue from "assets/img/home.png";
import people from "assets/img/Network_grey.png";
import home from "assets/img/home_grey.png";
import insights_blue from "assets/img/insight_blue.png";
import insights from "assets/img/insights_grey.png";
import "./style.css";
import logo from "assets/img/Logo.png";
import profile_picture from "assets/img/profile_picture.png";
class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pic: "",
      profile_picture: "",
      alpha: "a",
      home: "",
      network: "",
      insights: "",
      width: window.innerWidth
    };
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  updateDimensions() {
    if (window.innerWidth < 960) {
      this.setState({ width: "96%" });
    } else {
      this.setState({ width: "100%" });
    }
  }
  componentDidMount = () => {
    this.updateDimensions();
    if (window.innerWidth > 801) {
      if (
        window.location.pathname == "/mynetwork" ||
        window.location.pathname == "/investors" ||
        window.location.pathname == "/requests"
      ) {
        let ele = document.getElementById("myNetwork");
        console.log(ele);
        ele.setAttribute("class", "activeNav");
        console.log(ele);
        let ele2 = document.getElementById("home");
        this.setState({
          network: people_blue,
          home: home,
          insights: insights
        });
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("insights");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      } else if (window.location.pathname == "/insights") {
        let ele = document.getElementById("insights");
        ele.setAttribute("class", "activeNav");
        this.setState({
          network: people,
          home: home,
          insights: insights_blue
        });

        let ele2 = document.getElementById("myNetwork");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("home");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      } else {
        // alert("in else");
        let ele = document.getElementById("home");
        console.log(ele);
        ele.setAttribute("class", "activeNav");
        console.log(ele);
        this.setState({
          network: people,
          home: home_blue,
          insights: insights
        });

        let ele2 = document.getElementById("myNetwork");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("insights");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      }
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.width != this.state.width) {
      this.setState({
        width: "100%"
      });
    }
  };

  alphaa = () => {
    localStorage.setItem("alpha", "a");
  };
  alphab = () => {
    localStorage.setItem("alpha", "b");
  };
  alphac = () => {
    localStorage.setItem("alpha", "c");
  };
  setActive = name => {
    if (window.innerWidth > 801) {
      if (name == "myNetwork") {
        let ele = document.getElementById("myNetwork");
        ele.setAttribute("class", "activeNav");

        let ele2 = document.getElementById("home");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("insights");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");

        this.setState({
          network: people_blue,
          home: home,
          insights: insights
        });
      } else if (name == "home") {
        let ele = document.getElementById("home");
        ele.setAttribute("class", "activeNav");
        this.setState({
          home: home_blue,
          network: people,
          insights: insights
        });
        let ele2 = document.getElementById("myNetwork");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("insights");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      } else if (name == "insights") {
        let ele = document.getElementById("insights");
        ele.setAttribute("class", "activeNav");
        this.setState({
          home: home,
          network: people,
          insights: insights_blue
        });

        let ele2 = document.getElementById("myNetwork");
        ele2.removeAttribute("class", "activeNav");
        ele2.setAttribute("class", "navlinks");

        let ele3 = document.getElementById("home");
        ele3.removeAttribute("class", "activeNav");
        ele3.setAttribute("class", "navlinks");
      }
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div style={{ width: window.innerWidth > 960 ? "100%" : "96%" }}>
        {window.innerWidth > 801 ? (
          <div className="d-flex" style={{ margin: "0px 1rem" }}>
            <CssBaseline />
            <div
              style={{
                display: "flex",
                "justify-content": " flex-start",
                "align-items": "right",
                width: "121%",
                lineHeight: "36px"
              }}
            >
              <a href="/updates">
                <div
                  id="home"
                  style={{}}
                  className="navlinks"
                  onClick={() => {
                    this.setActive("home");
                  }}
                >
                  <img
                    src={this.state.home}
                    className="mr-3"
                    height="auto"
                    width="21px"
                  />
                  <span style={{ lineHeight: 0, verticalAlign: "middle" }}>
                    Home
                  </span>
                </div>
              </a>
              <a href="/mynetwork" style={{ color: "" }}>
                <div
                  id="myNetwork"
                  style={{ marginLeft: "2em" }}
                  className="navlink2"
                  onClick={() => {
                    this.setActive("myNetwork");
                    // this.props.history.push('/investors')
                  }}
                >
                  <img
                    src={this.state.network}
                    className="mr-3"
                    height="auto"
                    width="21px"
                  />
                  <span style={{ lineHeight: 0, verticalAlign: "middle" }}>
                    My Network
                  </span>
                </div>
              </a>
              <a href="/insights" style={{ color: "" }}>
                <div
                  id="insights"
                  style={{ marginLeft: "2em", width: "91px" }}
                  className="navlink2"
                  onClick={() => {
                    this.setActive("insights");
                    // this.props.history.push('/investors')
                  }}
                >
                  <img
                    src={this.state.insights}
                    className="mr-3"
                    height="24px"
                    width="26px"
                  />
                  <span style={{ lineHeight: 0, verticalAlign: "middle" }}>
                    Insights
                  </span>
                </div>
              </a>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                "justify-content": " flex-end",
                "align-items": "right",
                width: "100%",
                lineHeight: 36
              }}
            >
              <Avatar
                alt="Profile Picture"
                style={{ cursor: "pointer", marginLeft: 3, marginTop: -5 }}
                src={profile_picture}
                className={classes.avatar}
              />
              <h5
                style={{
                  color: "#14171a",
                  fontWeight: "bold",
                  fontFamily: "Helvetica",
                  fontSize: "13px",
                  cursor: "pointer"
                }}
              >
                Logout
              </h5>
            </div>
          </div>
        ) : (
          <div className="d-flex" style={{ margin: "0px 4rem" }}>
            <CssBaseline />
            <div
              className=""
              style={{
                display: "flex",
                "justify-content": " flex-start",
                "align-items": "right",
                width: "100%"
              }}
            >
              <img
                src={logo}
                className={classes.logoImage}
                width="auto"
                height="50px"
                style={{ marginTop: "-10px" }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
