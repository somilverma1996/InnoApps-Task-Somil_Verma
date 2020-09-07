import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import { Avatar } from "@material-ui/core";
import profile_picture from "assets/img/profile_picture.png";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import "./abcs.css";
import {
  grayColor,
  successColor,
  dangerColor,
  whiteColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

import ReadMoreAndLess from "react-read-more-less";
import client from "../../connection.js";
import loader from "assets/img/loader.gif";
import getCompaniesDetailQuery from "../../queries/getCompany.js";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const styles = theme => ({
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
  details: {
    alignItems: "center",
    paddingLeft: "3.7%"
  },
  column: {
    // flexBasis: '100%',
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
  mainPaper: {
    backgroundColor: "#fff",
    display: "flex",
    width: "61%",
    marginBottom: ".4%",
    minHeight: "11vh",
    paddingLeft: "4.2%",
    paddingTop: "1.2%",
    paddingBottom: "1.2em",
    [theme.breakpoints.down(801)]: {
      width: "95.5%",
      minHeight: "14vh"
    }
  },
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: "#3d76bd",
    outline: "0px",
    color: whiteColor,
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(grayColor[0]) +
      ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    // transition:
    //   "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: whiteColor,
      outline: "0px",
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(grayColor[0]) +
        ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },

  success: {
    backgroundColor: successColor[0],
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: successColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2)"
    }
  },
  danger: {
    backgroundColor: dangerColor[0],
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(dangerColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(dangerColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(dangerColor[0]) +
      ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.2)"
    }
  },
  closeIcon: {
    display: "flex",
    cursor: "pointer",
    justifyContent: "flex-end",
    marginTop: "10px",
    color: "#657786",
    fontSize: "1.2em",
    marginRight: 10
  },
  perspective: {
    color: "#1560BD",
    fontFamily: "Helvetica",
    fontSize: 13,
    marginRight: 10,
    borderBottom: "1px solid #1560BD",
    marginTop: "5px",
    fontWeight: 400
  },
  perspectiveDialog: {
    color: "#1560BD",
    fontFamily: "Helvetica",
    fontSize: 16,
    marginRight: -32,
    borderBottom: "1px solid #1560BD",
    marginTop: "5px",
    lineHeight: "17px!important",
    fontWeight: "normal"
  }
});

function Description(props) {
  const [open, setOpen] = useState(false);
  const [alert] = useState(null);
  const [showLoader, setLoader] = useState(false);
  const [overall_data, setOverallData] = useState([]);
  const [openTeam, setOpenTeam] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [data, setSelectedDesc] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [company_data] = useState([
    {
      id: 1,
      name: "Overview",
      data:
        "Long/Short Equity - US Small Caps Started on November 1, 2017 Limited Partnership, Delaware Delaware"
    },
    {
      id: 2,
      name: "Firm",
      data:
        "The firm has 7 team members, 3 of which are dedicated investment professionals with an average of 19 years industry experience. John Richmond, Portfolio Manager Bob Cohen, Partner Juliette Kelly, IR & Marketing "
    },
    {
      id: 3,
      name: "Team",
      data:
        "Kleber Capital is a $210 million New York based firm that was formed in 2017 by John Richmond, with a particular focus on small cap equities."
    },
    {
      id: 4,
      name: "Strategy",
      data:
        "INVESTMENT PROCESS John Smith follows long/short equity, market directional approach to investing, with a core competence in stock selection that typically results in an unleveraged net long bias. The fund itself is constructed more from a bottom-up perspective reflecting the benchmark unconstrained approach taken to building out exposure. However, given the expected macro volatility in coming year, a top down macro consideration is also of relevance. This allows for the identification of the more impaired areas of the investment universe as well as those more in an economic up cycle. Subsequently, this macro perspective helps both condition the underlying forecasts made in the analysis of individual companies, while also having a more constructive or cautious positioning if needed. RISK MANAGEMENT Positions are rebalanced after extreme volatility compression or volatility expansion. Stop-losses are used. Daily portfolio stress testing with portfolio construction and position sizing is fully systematized. Volatility is strictly controlled in order to manage drawdowns."
    },
    {
      id: 5,
      name: "Terms",
      data:
        "Long/Short Equity - US Small Caps Started on November 1, 2017 Limited Partnership, Delaware Delawar"
    },
    { id: 6, name: "Service Providers", data: "Noida" }
  ]);

  // editorState: EditorState.createEmpty(),

  const getDetails = () => {
    return client.query({
      query: getCompaniesDetailQuery,
      variables: { companyName: sessionStorage.getItem("company_name") }
    });
  };

  useEffect(() => {
    getDetails().then(result => {
      setOverallData(result.data.companies || []);
      setLoader(false);
    });
  });

  const handleOkClick = () => {
    setOpen(false);
  };

  const { classes } = props;

  if (overall_data.length > 0) {
    company_data[0].data = overall_data[0].overview;
    company_data[1].data = overall_data[0].firm;
    company_data[2].data = overall_data[0].team;
    company_data[3].data = overall_data[0].strategy;
    company_data[4].data = overall_data[0].terms;
    company_data[5].data = overall_data[0].address;
    // company_data[5].data = overall_data[0].address
  }

  const handleClose2 = () => {};

  const editorConfiguration = {
    // plugins: [ Essentials, Italic, Paragraph ],
    // toolbar: [ 'bold', 'italic' ],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "undo",
        "redo"
      ],
      language: "en"
    }
  };

  return (
    <div className={classes.scroll}>
      {alert}
      {company_data.map(function(data, i) {
        {
          console.log(data);
        }
        return (
          <div className={classes.mainPaper} key={i}>
            <div
              style={{
                backgroundColor: "#fff",
                lineHeight: "33px",
                width: "100%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  lineHeight: "15px"
                }}
              >
                <b
                  style={{
                    fontSize: "16px",
                    fontFamily: "Helvetica",
                    color: "#14171a"
                  }}
                >
                  {data.name}
                </b>

                <span style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span
                    style={{
                      color: "#1560bd",
                      fontSize: 14,
                      marginRight: "1em",
                      cursor: "pointer",
                      fontFamily: "Helvetica"
                    }}
                    onClick={() => {
                      setSelectedIndex(i);
                      setOpen(true);
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid #1560bd",
                        fontFamily: "Helvetica",
                        fontSize: "12px"
                      }}
                    >
                      Edit
                    </span>
                  </span>
                </span>
              </div>

              <div
                id="ddddd"
                style={{
                  width: "90%",
                  lineBreak: "strict",
                  fontFamily: "Helvetica"
                }}
                onClick={() => {
                  setSelectedDesc(data);
                  setOpenDescription(true);
                  // props.history.push("/descriptionPost", { data: data });
                }}
              >
                <br />
                <ReadMoreAndLess
                  className="read-more-content"
                  charLimit={250}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  {data.data}
                </ReadMoreAndLess>
              </div>
              {i == 2 && (
                <span
                  onClick={() => {
                    setOpenTeam(true);
                  }}
                  style={{
                    color: "#1560BD",
                    fontFamily: "Helvetica",
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  John Richmond,{" "}
                  <b style={{ color: "#14171A", fontFamily: "Helvetica" }}>
                    Portfolio Manager
                  </b>
                </span>
              )}
            </div>
          </div>
        );
      })}
      <Dialog open={open}>
        <div
          className={classes.closeIcon}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </div>
        <span
          style={{
            fontWeight: 700,
            fontFamily: "Helvetica",
            textAlign: "center",
            fontSize: 18
          }}
        >
          Edit Description
        </span>
        <br />
        <CKEditor
          style={{ width: "100%", height: "0px" }}
          editor={ClassicEditor}
          data={company_data[selectedIndex].data}
          config={editorConfiguration}
          onInit={editor => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            style={{
              width: 100,
              height: 40,
              padding: 10,
              borderRadius: 4,
              backgroundColor: "#1560BD",
              color: "white",
              fontSize: 15,
              fontWeight: 600
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleOkClick}
            style={{
              width: 100,
              height: 40,
              padding: 10,
              outline: 0,
              borderRadius: 4,
              backgroundColor: "white",
              marginLeft: 10,
              color: "#1560BD",
              fontSize: 15,
              fontWeight: 600
            }}
          >
            Ok
          </Button>
        </div>
        <br />
        <br />
      </Dialog>
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
        <img src={loader} height="90px" width="90px" />
      </Dialog>
      <Dialog
        open={openTeam}
        onClose={() => {
          setOpenTeam(false);
        }}
        PaperProps={{
          classes: { paper: classes.dialogPaper },
          style: {
            minHeight: 150,
            // width: 600,
            overflowX: "hidden"
          }
        }}
      >
        <div className={classes.column} style={{  }}>
          <div className="row">
            <div className="col-xs-1 col-sm-2 col-md-2">
              <Avatar
                alt="Profile Picture"
                style={{
                  marginTop: "14px",
                  marginLeft: 3,
                  width: 65,
                  height: 65
                }}
                src={profile_picture}
                className={classes.avatar}
              />
            </div>
            <div style={{ marginLeft: -30 }} className="col-xs-6 col-sm-8 col-md-10">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: "15px",
                  marginTop: 14
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "98%"
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      fontFamily: "Helvetica",
                      color: "#14171a"
                    }}
                  >
                    John Richmond
                    <span
                      style={{
                        color: "#657786",
                        fontWeight: "normal",
                        fontFamily: "Helvetica",
                        fontSize: 18
                      }}
                    >
                      @JohnRichmond
                    </span>{" "}
                    <span style={{ verticalAlign: "super", color: "#653386" }}>
                      .
                    </span>{" "}
                    <span
                      style={{
                        color: "#657786",
                        fontWeight: "normal",
                        fontSize: 18,
                        fontFamily: "Helvetica"
                      }}
                    >
                      Portfolio Manager
                    </span>{" "}
                  </span>
                  <span className={classes.perspectiveDialog}>Edit</span>
                </div>
              </div>
              <br />
              <p
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "22px",
                  color: "#14171a"
                }}
              >
                John has a nineteen years of long/short investing experience in
                public market.
              </p>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={openDescription}
        onClose={() => {
          setOpenDescription(false);
        }}
        PaperProps={{
          classes: { paper: classes.dialogPaper },
          style: {
            minHeight: 150
          }
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            lineHeight: "33px",
            width: "100%",
            padding: "4%",
            marginRight: "0%!important"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              lineHeight: "15px"
            }}
          >
            <b
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                color: "#14171a"
              }}
            >
              {data.name}
            </b>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              <span
                style={{
                  color: "#1560bd",
                  fontSize: 16,
                  marginRight: "1em",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setSelectedIndex(0);
                  // editAlert();
                  setOpen(true);
                }}
              >
                <span
                  style={{
                    borderBottom: "1px solid #1560bd",
                    fontFamily: "Helvetica"
                  }}
                >
                  Edit
                </span>
              </span>
            </span>
          </div>

          <div
            style={{
              width: "90%",
              lineBreak: "strict",
              fontFamily: "Helvetica",
              fontSize: 20,
              color: "#14171a"
            }}
          >
            {data.data}
          </div>
        </div>
      </Dialog>
    </div>
  );
}

Description.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Description));
