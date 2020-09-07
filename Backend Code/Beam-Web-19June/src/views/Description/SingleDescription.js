/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Dialog from "@material-ui/core/Dialog";
import { Avatar } from "@material-ui/core";
import profile_picture from "assets/img/profile_picture.png";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./abcs.css";
import {
  grayColor,
  successColor,
  dangerColor,
  whiteColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

import client from "../../connection.js";
import loader from "assets/img/loader.gif";
import getCompaniesDetailQuery from "../../queries/getCompany.js";
import updateCompanyDetailQuery from "../../queries/updateCompany.js";
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
    width: "81%",
    marginBottom: ".4%",
    minHeight: "11vh",
    paddingLeft: "4%",
    paddingTop: "2%",
    paddingBottom: "1.2em",
    [theme.breakpoints.down(801)]: {
      width: "94.5%",
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
  }
});

function Dashboard(props) {
  // state = {

  // }

  //editorState: EditorState.createEmpty(),
  const [alert, setAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const [showLoader, setLoader] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  const [overall_data, setOverallData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [company_data] = useState([
    { id: 1, name: "Overview", data: "" },
    { id: 2, name: "Firm", data: "" },
    { id: 3, name: "Team", data: "" },
    { id: 4, name: "Strategy", data: "" },
    { id: 5, name: "Terms", data: "" },
    { id: 6, name: "Service Providers", data: "" }
  ]);

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
  const [data, setData] = useState({});

  const getDetails = () => {
    client
      .query({
        query: getCompaniesDetailQuery,
        variables: { companyName: sessionStorage.getItem("company_name") }
      })
      .then(result => {
        setOverallData(result.data.companies);
        setLoader(false);
      });
  };

  useEffect(() => {
    let obj = props.location.state.data;
    setData(obj);
  }, [props.location.state.data]);

  // const handleChange = e => {
  //   let companyData = fields.overall_data;

  //   switch (fields.selectedIndex) {
  //     case 0:
  //       companyData[fields.selectedIndex].overview = e.target.value;
  //       break;
  //     case 1:
  //       companyData[fields.selectedIndex].firm = e.target.value;
  //       break;
  //     case 2:
  //       companyData[fields.selectedIndex].team = e.target.value;
  //       break;
  //     case 3:
  //       companyData[fields.selectedIndex].strategy = e.target.value;
  //       break;
  //     case 4:
  //       companyData[fields.selectedIndex].terms = e.target.value;
  //       break;
  //     case 5:
  //       companyData[fields.selectedIndex].address = e.target.value;
  //       break;
  //   }

  //   setOverallData(companyData);
  // };

  const handleClose2 = () => {};

  // const handleClose = e => {
  //   setAlert(null);

  //   let companyData = overall_data;

  //   switch (selectedIndex) {
  //     case 0:
  //       companyData[0].overview = e;
  //       break;
  //     case 1:
  //       companyData[0].firm = e;
  //       break;
  //     case 2:
  //       companyData[0].team = e;
  //       break;
  //     case 3:
  //       companyData[0].strategy = e;
  //       break;
  //     case 4:
  //       companyData[0].terms = e;
  //       break;
  //     case 5:
  //       companyData[0].address = e;
  //       break;
  //   }
  //   setOverallData(companyData);

  //   client
  //     .mutate({
  //       variables: {
  //         overview: overall_data[0].overview,
  //         firm: overall_data[0].firm,
  //         team: overall_data[0].team,
  //         strategy: overall_data[0].strategy,
  //         terms: overall_data[0].overview,
  //         address: overall_data[0].address
  //       },
  //       mutation: updateCompanyDetailQuery
  //     })

  //     .then(() => {
  //       getDetails();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // eslint-disable-next-line no-unused-vars
  const hideAlert = () => {};

  const handleOkClick = () => {
    setOpen(false);
  };
  // const editAlert = () => {
  //   const { classes } = props;

  //   const setAlert1 = () => (
  //     <SweetAlert
  //       input
  //       defaultValue={data.data}
  //       showCancel
  //       inputType="textarea"
  //       placeholder="Write something..."
  //       required={true}
  //       style={{ display: "block", marginTop: "-100px" }}
  //       title={
  //         <span style={{ fontWeight: 700, fontFamily: "Helvetica" }}>
  //           Edit Description
  //         </span>
  //       }
  //       onConfirm={e => {
  //         handleClose(e);
  //       }}
  //       onCancel={() => hideAlert()}
  //       confirmBtnCssClass={classes.button + " " + classes.info}
  //       cancelBtnCssClass={classes.button + " " + classes.danger}
  //     />
  //   );
  //   setAlert(setAlert1);
  // };

  const { classes } = props;

  if (overall_data.length > 0) {
    company_data[0].data = overall_data[0].overview;
    company_data[1].data = overall_data[0].firm;
    company_data[2].data = overall_data[0].team;
    company_data[3].data = overall_data[0].strategy;
    company_data[4].data = overall_data[0].terms;
    company_data[5].data = overall_data[0].address;
  }

  return (
    // <div class="abc">
    // <div class="row" style={{ overflowY: 'scroll', height: 1200 }}>
    <div className={classes.scroll}>
      {/* <div className={classes.scroll}> */}
      {alert}
      {/* return  */}
      <i
        className="fa fa-arrow-left backIcon1"
        onClick={() => {
          props.history.go(-1);
        }}
      />
      <br />
      <br />
      <div className={classes.mainPaper}>
        <div
          style={{ backgroundColor: "#fff", lineHeight: "33px", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              lineHeight: "15px"
            }}
          >
            <b style={{ fontSize: "20px", fontFamily: "Helvetica" }}>
              {data.name}
            </b>
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
              <span
                style={{
                  color: "#548acc",
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
                    borderBottom: "1px solid #548acc",
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
              fontSize: 14
            }}
          >
            {data.data}
          </div>
        </div>
      </div>
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
          data={data.data}
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

      {/* <Dialog open={open}>
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
          Edit Descriptionxx
        </span>
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              width: 100,
              height: 40,
              padding: 10,
              borderRadius: 4,
              backgroundColor: "red"
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              width: 100,
              height: 40,
              padding: 10,
              borderRadius: 4,
              backgroundColor: "red",
              marginLeft: 10
            }}
          >
            Ok
          </Button>
        </div>
        <br />
        <br />
      </Dialog> */}
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
            // backgroundColor: 'transparent',
            // boxShadow: 'none',
            minHeight: 250
          }
        }}
      >
        <div className={classes.column} style={{ width: 500 }}>
          <div style={{ display: "flex" }}>
            <div className="col-lg-1">
              <Avatar
                alt="Profile Picture"
                style={{ marginTop: "14px", cursor: "pointer", marginLeft: 3 }}
                src={profile_picture}
                className={classes.avatar}
              />
            </div>
            <div className="col-lg-11">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: "15px",
                  marginTop: 14
                }}
              >
                <div style={{}}>
                  <span
                    style={{ width: "120px", fontSize: 14, fontWeight: 600 }}
                  >
                    John Richmond @
                    <span style={{ color: "#657786", fontWeight: 400 }}>
                      JohnRichmond
                    </span>{" "}
                    <span style={{ verticalAlign: "super" }}>.</span>{" "}
                    <span style={{ color: "#657786", fontWeight: "normal" }}>
                      Portfolio Manager
                    </span>{" "}
                  </span>
                </div>
                <br />
                <span className={classes.perspective}>Edit</span>
              </div>
              <br />
              <p style={{ fontFamily: "Helvetica", fontSize: "14px" }}>
                John has a nineteen years of long/short investing experience in
                public market.
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Dashboard));
