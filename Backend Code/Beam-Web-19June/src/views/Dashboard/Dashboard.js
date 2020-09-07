/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ReadMoreAndLess from "react-read-more-less";
import profilePicture from "assets/img/profile_picture.png";
import message from "assets/img/message 24x24.png";
import threeDots from "assets/img/three dots 24x24.png";
import "./abc.css";
import Popover from "@material-ui/core/Popover";
import {
  Dialog,
  Popper,
  Grow,
  ClickAwayListener,
  MenuItem,
  MenuList
} from "@material-ui/core";
import profileCover from "assets/img/profile cover.png";
import imageIcon from "assets/img/gallery.png";
import CloseIcon from "@material-ui/icons/Close";
import client from "../../connection.js";
import Moment from "react-moment";
import getPostsQuery from "../../queries/getPosts.js";
import loader from "assets/img/loader.gif";
import addPost from "../../queries/addPost.js";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import eye from "assets/img/eye 24x24.png";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import bookmark from "assets/img/bookmark 24x24.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ShareIcon from "assets/img/share_icon.png";

const styles = theme => ({
  textMargins: {
    marginTop: "-15px",
    marginLeft: "12px",
    [theme.breakpoints.up(1900)]: {
      marginLeft: "-20px"
    },
    [theme.breakpoints.down(1381)]: {
      marginLeft: "10px"
    }
  },
  expansionSummary: {
    padding: "0 24px 0 12px"
  },
  img: {
    width: "35px",
    top: "22px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
  dialogPaper: {
    overflowX: "hidden"
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
    paddingLeft: "70px"
  },
  details1: {
    alignItems: "center",
    lineHeight: 0
    // paddingLeft: "63px!important"
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
    width: "96%",
    cursor: "default",
    "&:first-child": {
      marginTop: "0%!important"
    },
    [theme.breakpoints.up(1900)]: {
      width: "110%"
    },
    [theme.breakpoints.down(1340)]: {
      width: "98%"
    },
    [theme.breakpoints.down(1441)]: {
      width: "94%"
    },
    [theme.breakpoints.down(1370)]: {
      width: "93%"
    },
    [theme.breakpoints.down(1330)]: {
      width: "89%"
    },
    [theme.breakpoints.down(1025)]: {
      width: "90%"
    },
    [theme.breakpoints.down(801)]: {
      width: "98% "
    }
    // [theme.breakpoints.down(801)]: {
    //   width: "98% "
    // }
  },
  body1: {
    backgroundColor: "#E8F1FC",
    height: 138,
    width: "96%",
    marginBottom: "2%",
    [theme.breakpoints.up(1900)]: {
      width: "110%"
    },
    [theme.breakpoints.down(1340)]: {
      width: "98%"
    },
    [theme.breakpoints.down(1441)]: {
      width: "94%"
    },
    [theme.breakpoints.down(1370)]: {
      width: "93%"
    },
    [theme.breakpoints.down(1330)]: {
      width: "89%"
    },
    [theme.breakpoints.down(1025)]: {
      width: "90%"
    },
    [theme.breakpoints.down(769)]: {
      width: "98%"
    }
  },
  input: {
    color: "#14171a",
    height: "4em",
    marginTop: "10px",
    fontSize: "14px !important",
    fontFamily: "Inter",
    "&::placeholder": {
      fontFamily: "Inter",
      fontSize: "14px !important",
      color: "#3878c7",
      fontWeight: "510",
      lineHeight: "2rem"
    }
  },
  padding: {
    marginLeft: "4px",
    // changed -120 to 0
    [theme.breakpoints.up(1900)]: {
      marginLeft: "-14px"
    }
  },
  postBtn: {
    marginRight: "4.5em",
    [theme.breakpoints.up(1900)]: {
      marginRight: "11.5em"
    },
    [theme.breakpoints.down(801)]: {
      marginRight: "2.5em"
    },
    [theme.breakpoints.down(769)]: {
      marginRight: "4.5em"
    }
  },
  txtField: {
    width: "140em",
    [theme.breakpoints.up(1900)]: {
      width: "280em"
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
  scroll: {
    marginLeft: "0px",
    overflowY: "scroll",
    height: 500,
    [theme.breakpoints.up(1400)]: {
      height: 790
    },
    [theme.breakpoints.up(1900)]: {
      height: 850
    },
    [theme.breakpoints.down(801)]: {
      overflowX: "hidden"
      // overflowY:
    },
    [theme.breakpoints.down(601)]: {
      height: 545,
      overflowX: "hidden"
      // overflowY:
    },
    [theme.breakpoints.down(421)]: {
      height: 445,
      overflowX: "hidden"
      // overflowY:
    }
  },
  dialogPaper: {
    backgroundColor: "transparent"
  },
  Paper: {
    width: "284px",
    borderRadius: "0px",
    [theme.breakpoints.down(1441)]: {
      width: "98%"
    },
    [theme.breakpoints.down(1025)]: {
      width: "108%"
    },
    [theme.breakpoints.down(801)]: {
      width: "98%"
    }
  },
  postBtnLabel: {
    cursor: "pointer",
    marginLeft: 84,
    [theme.breakpoints.down(421)]: {
      marginLeft: 66
    }
  },
  popperPaper: {
    width: "12%!important",
    cursor: "default!important",
    left: "399px!important",
    top: "256px!important"
  },
  menuItem: {
    color: "#657786",
    fontFamily: "Helvetica",
    fontSize: "14px"
  },
  lh40: {
    lineHeight: "40px",
    [theme.breakpoints.down(421)]: {
      lineHeight: "20px"
    }
  },
  imgDialog: {
    marginTop: 5,
    [theme.breakpoints.down(421)]: {
      marginTop: -5
    }
  }

});
const Dashboard = props => {
  let [posts, setPosts] = useState([]);
  let [post, setPost] = useState([]);
  let [file, setFile] = useState("");
  let [profileImage] = useState("");
  let [open, setOpen] = useState(false);
  let [openPoper, setOpenPoper] = useState(false);
  let [openPoperFromDialog, setOpenPoper1] = useState(false);
  let [postError, setPostError] = useState("");
  let [showLoader, setLoader] = useState(false);
  let [selectedPost, setSelectedPost] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);
  const handleToggle1 = () => {
    setOpenPoper1(prevOpen => !prevOpen);
  };

  const handleToggle = () => {
    setOpenPoper(prevOpen => !prevOpen);
  };

  const handleClosePoper1 = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenPoper1(false);
  };

  const handleClosePoper = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenPoper(false);
  };

  const handleClickPopOver = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openP = Boolean(anchorEl);
  const id = openP ? "simple-popover" : undefined;

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleListKeyDown1(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // let [setSelectedFile] = useState("");
  // let [imagePreviewUrl] = useState("");
  // let [setVideoPath] = useState("");
  // let [setPath] = useState("");

  useEffect(() => {
    // if (!loaded) {
    //   loaded = true;
    getPosts().then(result => {
      setPosts(result.data.posts || []);
      // setSelectedPost(result.data.posts[0]);
      setLoader(false);
      sessionStorage.setItem("updates_count", result.data.posts.length);
    });
    // }
  });

  const handleClick = () => {
    console.log(post);
    if (post.length == 0) {
      setPostError("Please fill in this field.");
    } else {
      client
        .mutate({
          variables: {
            content: post,
            title: post,
            company_handle: sessionStorage.getItem("company_name"),
            created_by: sessionStorage.getItem("username")
          },
          mutation: addPost
        })

        .then(() => {
          setPost("");
          setPostError("");
          getPosts();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const getPosts = () => {
    return client.query({
      query: getPostsQuery
    });
  };

  const handleChange = e => {
    setPost(e.target.value);
  };

  const handleFileChange = e => {
    setFile(e.target.files[0].name);
  };

  const handleClose2 = () => { };

  // const openDialog = () => {
  //   setOpen(true);
  // };

  const { classes } = props;

  console.log(selectedPost);
  return (
    <div className={classes.scroll}>
      <div className="row" style={{ marginRight: "0px" }}>
        {/* changed marginRIght: from -160px to 0px  */}
        <div className="col-lg-8 dashboard">
          <div className={classes.body1}>
            <div
              className="d-flex"
              style={{ margin: "0px 15px", paddingTop: "16px" }}
            >
              <img
                alt="Profile Picture"
                style={{
                  cursor: "pointer",
                  marginRight: "18px",
                  marginLeft: "10px",
                  height: "35px",
                  width: "35px"
                }}
                src={
                  profileImage
                    ? `data:image/jpeg;base64,${profileImage}`
                    : profilePicture
                }
              />
              <input
                className="fileInput"
                type="file"
                accept="image/*"
                id="file_image"
                style={{ display: "none" }}
              />
              <TextField
                id="description"
                variant="outlined"
                fullWidth
                style={{ width: "100%", fontSize: 15, height: "4.7em" }}
                placeholder="Start a post.."
                multiline
                onChange={e => handleChange(e)}
                value={post}
                name="post"
                rows={4}
                InputProps={{
                  classes: { input: classes["input"] }
                }}
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
            {/* <div style={{ display: 'flex', }}> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                className={classes.postBtnLabel}
                onChange={e => handleFileChange(e)}
              >
                <label
                  htmlFor="files"
                  style={{ width: "0%" }}
                  onChange={e => handleFileChange(e)}
                >
                  <img
                    src={imageIcon}
                    width="22px"
                    height="22px"
                    onChange={e => handleFileChange(e)}
                    style={{ cursor: "pointer" }}
                  />
                </label>
              </div>
              <br />
              {file.length > 0 && (
                <div className="file d-flex">
                  {" "}
                  <span className="ml-3 file"> {file}</span>
                  {/* <CloseIcon onClick={ () => {
                setFile("")
              }} class="crossIcon" /> */}
                  <CloseIcon
                    style={{ color: "black", marginTop: 3, cursor: "pointer" }}
                    onClick={() => {
                      setFile("");
                    }}
                  />
                </div>
              )}
              <input
                className="fileInput"
                type="file"
                accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/* "
                id="files"
                style={{ visibility: "hidden", width: "0%" }}
                onChange={e => handleFileChange(e)}
              />

              <Button
                onClick={handleClick}
                style={{
                  outline: 0,
                  marginRight: 15,
                  padding: "0px 10px",
                  width: 60,
                  textTransform: "capitalize",
                  height: 26,
                  backgroundColor: "#1560bd",
                  fontSize: 14,
                  color: "white",
                  fontFamily: "Helvetica Bold",
                  borderRadius: "30px"
                }}
              >
                Post
              </Button>
            </div>
          </div>
          <Popover
            className={{
              paper: classes.popperPaper
            }}
            id={id}
            open={openP}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Typography className={classes.typography}>
              <div
                style={{
                  // cursor: "pointer",
                  marginTop: "-2.5em",
                  backgroundColor: "#fff"
                }}
              >
                <img
                  src={profileCover}
                  alt="logo"
                  className={classes.img}
                  style={{
                    width: "100%",
                    position: "relative",
                    // cursor: "pointer",
                    height: "auto"
                  }}
                />
                {/* {img ? (
                  <div
                    style={{
                      padding: "6.5%",
                      marginLeft: "1em",
                      position: "absolute",
                      fontSize: 24,
                      backgroundColor: "#c4c4c4",
                      borderRadius: "50%",
                      width: "80px",
                      borderTop: "2px solid white",
                      height: "80px"
                    }}
                  >
                    <span
                      style={{
                        fontSize: 22,
                        paddingTop: "0em",
                        marginTop: "0px",
                        marginLeft: "5px",
                        verticalAlign: "-webkit-baseline-middle",
                        fontFamily: "Imprint mt shadow"
                      }}
                    >
                      K C
                    </span>
                  </div>
                ) : ( */}
                <div
                  style={{
                    paddingLeft: "1%",
                    marginLeft: "1em",
                    position: "absolute",
                    top: "50px",
                    borderRadius: "50%"
                  }}
                >
                  <img
                    alt="Profile Picture"
                    style={{
                      marginTop: "5px"
                      // cursor: "pointer"
                    }}
                    width="80px"
                    height="80px"
                    src={profilePicture}
                    className={classes.avatar}
                  />
                </div>
                <br />
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 15,
                    top: "23%",
                    fontSize: 12,
                    fontWeight: "normal",
                    fontFamily: "Helvetica",
                    color: "#1560bd"
                  }}
                >
                  Contact
                </div>
                {/* )} */}
                <br />
                <div style={{ marginTop: "1em", marginLeft: "2em" }}>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#14171A",
                      fontFamily: "Helvetica"
                    }}
                  >
                    Kleber Capital
                  </h4>
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#657786",
                      fontWeight: "normal",
                      fontFamily: "Helvetica",
                      textTransform: "capitalize",
                      lineHeight: 0
                    }}
                  >
                    @kleberCapital
                  </h6>
                </div>
                {/* <br/> */}

                <div
                  style={{
                    display: "flex",
                    marginLeft: "2em",
                    marginTop: "2rem"
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontFamily: "Helvetica",
                      color: "#14171a",
                      fontWeight: "normal"
                    }}
                  >
                    Investor Relations and Business Development at Kleber
                    Capital Management{" "}
                  </p>
                </div>
              </div>
            </Typography>
          </Popover>

          {/* <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Toggle Menu Grow
          </Button> */}
          <Popper
            id="check"
            open={openPoper}
            anchorEl={anchorRef.current}
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
                  <ClickAwayListener onClickAway={handleClosePoper}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem className={classes.menuItem} onClick={handleClosePoper}>Edit Post</MenuItem>
                      <MenuItem className={classes.menuItem} onClick={handleClosePoper}>
                        Delete from Page
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          {posts.map(function (post) {
            return (
              <Paper
                key={1}
                defaultExpanded
                className={classes.expansionPanelPaper + " mb-2"}
              >
                <ExpansionPanelSummary
                  style={{ cursor: "default" }}
                  className={classes.expansionSummary}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
                >
                  <img
                    alt="Profile Picture"
                    style={{
                      marginTop: "5px"
                    }}
                    width="50px"
                    height="50px"
                    src={profilePicture}
                    className={classes.avatar}
                  />
                  <div className="d-flex justify-space-between w-100">
                    <div style={{ lineHeight: "0px", marginTop: 13 }}>
                      <b
                        style={{
                          width: "120px",
                          fontSize: 14,
                          color: "#14171a",
                          lineHeight: "13px",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontFamily: "Helvetica"
                        }}
                        onClick={handleClickPopOver}
                      >
                        {post.company.name}
                      </b>{" "}
                      <b
                        style={{
                          width: "120px",
                          fontFamily: "Helvetica",
                          fontSize: 14,
                          cursor: "pointer",
                          color: "#657786"
                        }}
                        onClick={handleClickPopOver}
                      >
                        @
                        <span
                          onClick={handleClickPopOver}
                          style={{
                            color: "#657786",
                            fontWeight: 400,
                            cursor: "pointer"
                          }}
                        >
                          {post.user.first_name} {post.user.last_name}
                        </span>
                      </b>{" "}
                      <b
                        style={{
                          width: 50,
                          fontSize: 14,
                          color: "#657786"
                        }}
                      >
                        {/* <span style={{ verticalAlign: "super" }}>.</span>{" "} */}
                        <span>
                          <i
                            className="fa fa-circle"
                            style={{
                              fontSize: 1.8,
                              verticalAlign: "middle",
                              margin: "0px 6px"
                            }}
                          ></i>
                        </span>
                        <Moment
                          onClick={handleClickPopOver}
                          fromNow
                          style={{
                            fontFamily: "Helvetica",
                            fontSize: 14,
                            color: "#657786",
                            cursor: "pointer",
                            fontWeight: "normal",
                            lineHeight: window.innerWidth < 421 && "16px"
                          }}
                        >
                          <span>{post.created_at}</span>
                        </Moment>{" "}
                      </b>
                      {/* <div className={classes.details1}> */}
                      <span
                        onClick={() => {
                          setSelectedPost(post);
                          console.log(selectedPost);
                          setOpen(true);
                        }}
                        style={{
                          width: "100%",
                          lineHeight: 0,
                          fontSize: 14,
                          fontFamily: "Helvetica",
                          color: "#14171a",
                          cursor: "pointer"
                        }}
                      >
                        <ReadMoreAndLess
                          className="read-more-content"
                          charLimit={250}
                          readMoreText="Read more"
                          readLessText="Read less"
                        >
                          {post.content}
                        </ReadMoreAndLess>
                      </span>
                      {/* </div> */}
                    </div>
                    <ExpandMoreIcon
                      style={{
                        marginTop: 4,
                        marginRight: -14,
                        cursor: "pointer"
                      }}
                      ref={anchorRef}
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    />
                  </div>
                </ExpansionPanelSummary>
              </Paper>
            );
          })}
        </div>
        <div className={"beamDashboard"}>
          <div className={classes.padding + " paperWidth"}>
            {/* <ExpansionPanel defaultExpanded className={classes.expansionPanelPaper} style={{ marginBottom: "-1px", width: "280px" }}> */}
            <Paper className={classes.Paper} style={{ cursor: "normal" }}>
              <ExpansionPanelSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                style={{ minHeight: "27px", height: "34px", cursor: "default" }}
              >
                <div className={classes.column}>
                  <Typography
                    className={classes.heading}
                    style={{ display: "flex" }}
                  >
                    <div style={{ lineHeight: "40px", marginBottom: "-3px" }}>
                      <span className="activity">This week's activity</span>
                      {/* <span
                      style={{
                        fontWeight: 700,
                        lineHeight: "4.7rem",
                        verticalAlign: "bottom",
                        paddingRight: "4px"
                      }}
                    >
                      .
                    </span> */}
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
                      <span
                        style={{
                          color: "#1560BD",
                          fontSize: 12,
                          fontFamily: "Helvetica",
                          textDecoration: "underline",
                          cursor: "pointer"
                        }}
                      >
                        Refresh
                      </span>
                    </div>
                  </Typography>
                </div>
              </ExpansionPanelSummary>
            </Paper>
            {/* </ExpansionPanel> */}
            <Paper className={classes.Paper} style={{ height: 180 }}>
              <ExpansionPanel
                defaultExpanded
              // style={{ width: "100%" }}
              >
                <ExpansionPanelDetails className={classes.detai1s}>
                  <div className={classes.column}>
                    <div
                      style={{
                        lineHeight: "40px",
                        display: "flex",
                        fontFamily: "Helvetica",
                        justifyContent: "space-between"
                      }}
                    >
                      <b
                        style={{
                          width: "120px",
                          fontSize: 14,
                          color: "#657786",
                          fontFamily: "Helvetica"
                        }}
                      >
                        INVESTORS{" "}
                      </b>{" "}
                      <span
                        style={{
                          color: "#1560BD",
                          fontSize: 12,
                          fontFamily: "Helvetica",
                          textDecoration: "underline"
                        }}
                      >
                        {" "}
                        View insights
                      </span>{" "}
                    </div>
                    <div
                      style={{
                        lineHeight: "40px",
                        display: "flex",
                        marginBottom: "-10px",
                        justifyContent: "space-between"
                      }}
                    >
                      <b
                        style={{
                          width: "120px",
                          fontSize: 14,
                          color: "#14171a",
                          fontWeight: 600,
                          fontFamily: "Helvetica"
                        }}
                      >
                        19{" "}
                      </b>{" "}
                      <span
                        style={{
                          color: "#21ce99",
                          fontSize: 10,
                          fontFamily: "Helvetica",
                          fontWeight: 600
                        }}
                      >
                        <i
                          className="fa fa-arrow-up mr-2"
                          style={{ fontSize: "10px", fontWeight: 600 }}
                        ></i>
                        10%
                      </span>{" "}
                    </div>
                    <p
                      style={{
                        color: "#657786",
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: "Helvetica"
                      }}
                    >
                      Active investors
                    </p>
                    <div
                      style={{
                        lineHeight: "40px",
                        display: "flex",
                        marginBottom: "-10px",
                        justifyContent: "space-between"
                      }}
                    >
                      <b
                        style={{
                          width: "120px",
                          fontSize: 16,
                          fontFamily: "Helvetica",
                          color: "#14171a",
                          fontWeight: 600
                        }}
                      >
                        4{" "}
                      </b>{" "}
                      <span
                        style={{
                          color: "#ee3215",
                          fontSize: 10,
                          minWidth: 34,
                          fontFamily: "Helvetica",
                          fontWeight: 600
                        }}
                      >
                        <i
                          className="fa fa-arrow-down mr-2"
                          style={{ fontSize: "10px", fontWeight: 600 }}
                        ></i>
                        20%
                      </span>{" "}
                    </div>
                    <p
                      style={{
                        color: "#657786",
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: "Helvetica"
                      }}
                    >
                      New following investors
                    </p>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Paper>
            <br />
            <br />
            <ul className="list footerListUl">
              <li className="list-inline-item footerList">@ 2019 Beam</li>
              <li className="list-inline-item footerList">About</li>
              <li className="list-inline-item footerList">Help Center</li>
              <br />
              <li className="list-inline-item footerList">Terms</li>
              <li className="list-inline-item footerList">Privacy</li>
              <li className="list-inline-item footerList">Policy</li>
              <li className="list-inline-item footerList">Apps</li>
              <li className="list-inline-item footerList">Status</li>
            </ul>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        PaperProps={{
          classes: { paperScrollPaper: classes.dialogPaper, paper: classes.dialogPaper },
          style: {
            maxWidth: 600,
            width: 800,
            minHeight: 180,
            overflowX: "hidden"
          }
        }}
      >
        <div style={{ width: 540 }}></div>
        <Paper
          key={1}
          defaultExpanded
          className={" mb-2"}
          style={{ width: "96%" }}
        >
          <ExpansionPanelSummary
            className={classes.expansionSummary}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
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
                          Edit Post
                        </MenuItem>
                        <MenuItem
                          className={classes.menuItem}
                          onClick={handleClosePoper1}
                        >
                          Delete from Page
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>

            <div className={classes.column}>
              <Typography
                className={classes.heading}
                style={{ display: "flex", marginLeft: -1 }}
              >
                <img
                  alt="Profile Picture"
                  style={{
                    cursor: "pointer"
                  }}
                  width="50px"
                  height="50px"
                  src={profilePicture}
                  className={classes.avatar + " imgDialog"}
                />
                <div className="d-flex justify-space-between w-100">
                  <div className={classes.lh40}>
                    <b
                      style={{
                        width: "120px",
                        fontSize: 18,
                        color: "#14171a",
                        fontWeight: "bold",
                        fontFamily: "Helvetica"
                      }}
                      onClick={handleClickPopOver}
                    >
                      {/* {selectedPost.company.name != undefined
                      ? selectedPost.company.name
                      : ""} */}
                      {selectedPost.company ? selectedPost.company.name : ""}
                    </b>{" "}
                    <b
                      style={{
                        width: "120px",
                        fontFamily: "Helvetica",
                        fontSize: 18,
                        color: "#657786"
                      }}
                      onClick={handleClickPopOver}
                    >
                      @
                    <span
                        onClick={handleClickPopOver}
                        style={{ color: "#657786", fontWeight: "normal" }}
                      >
                        {selectedPost.user ? selectedPost.user.name : ""}{" "}
                        {selectedPost.user ? selectedPost.user.last_name : ""}
                      </span>
                    </b>{" "}
                    <b
                      style={{
                        width: 50,
                        fontSize: 14,
                        color: "#657786"
                      }}
                    >
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
                      <Moment
                        fromNow
                        style={{
                          lineHeight: "10px",
                          fontFamily: "Helvetica",
                          fontSize: 18,
                          color: "#657786",
                          fontWeight: "normal"
                        }}
                        className="lh-10"
                      >
                        <span>{selectedPost.created_at}</span>
                      </Moment>{" "}
                    </b>
                  </div>
                  <ExpandMoreIcon
                    style={{ marginRight: -30, marginTop: 12, cursor: "pointer" }}
                    ref={anchorRef1}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle1}
                  />
                </div>
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            className={classes.details1}
            style={{ marginBottom: "2em" }}
          >
            <div
              className={classes.column}
              style={{ paddingLeft: 40 }}
              id="testDashboard"
            >
              <span
                style={{
                  width: "100%",
                  fontSize: 22,
                  fontFamily: "Helvetica",
                  color: "#14171a"
                }}
              >
                {" "}
                <ReadMoreAndLess
                  style={{ paddingLeft: "40px" }}
                  className="read-more-content"
                  charLimit={250}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  {selectedPost.content}
                </ReadMoreAndLess>
              </span>
            </div>
          </ExpansionPanelDetails>
          <br />
          <div className={classes.details + " row"}>
            <div className="col-md-4">
              <span className="mr-3">
                <img
                  src={message}
                  width="30px"
                  height="30px"
                  style={{ color: "#657786", fontSize: 24 }}
                />
                <b
                  className="ml-3"
                  style={{
                    color: "#657786",
                    verticalAlign: "middle",
                    fontSize: 16,
                    fontFamily: "Helvetica"
                  }}
                >
                  23
                </b>
              </span>
              <span className="mr-3">
                <img src={ShareIcon} width="38px" height="30px" />
                <b
                  className="ml-3"
                  style={{
                    color: "#657786",
                    verticalAlign: "middle",
                    fontSize: 16,
                    fontFamily: "Helvetica"
                  }}
                >
                  23
                </b>
              </span>
            </div>
            <div className="col-md-8 secondColumn">
              <span className="mr-3">
                <img src={eye} width="33px" height="30px" />
                <b
                  className="ml-2"
                  style={{
                    color: "#657786",
                    verticalAlign: "middle",
                    fontSize: 16,
                    fontFamily: "Helvetica",
                    verticalAlign: "middle"
                  }}
                >
                  23
                </b>
              </span>
              <span className="mr-3">
                <img src={threeDots} width="33px" height="30px" />
                <b
                  className="ml-2"
                  style={{
                    color: "#657786",
                    verticalAlign: "middle",
                    fontSize: 16,
                    fontFamily: "Helvetica",
                    verticalAlign: "middle"
                  }}
                >
                  23
                </b>
              </span>
              <span className="mr-3">
                <img src={bookmark} width="30px" height="32px" />
                <b
                  className="ml-2"
                  style={{
                    color: "#657786",
                    verticalAlign: "middle",
                    fontSize: 16,
                    fontFamily: "Helvetica",
                    verticalAlign: "middle"
                  }}
                >
                  23
                </b>
              </span>
            </div>
            <br />
          </div>
          <br />
        </Paper>
      </Dialog>
      <Dialog
        open={showLoader}
        style={{ backgroundColor: "transparent" }}
        overlayStyle={{ backgroundColor: "transparent" }}
        onClose={() => {
          handleClose2();
        }}
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
    // </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Dashboard));
